class MazeEscapeComponent extends crsbinding.classes.BindableElement{
    get html(){
        return import.meta.url.replace(".js",".html");
    }
    async connectedCallback() {
        await super.connectedCallback();
        this.mazeElement = this.querySelector(".maze");
        this._createMaze(10, 10);

        this.mouseDownHandler = this.mouseDown.bind(this);
        this.mouseOverHandler = this.mouseOver.bind(this);
        this.mouseUpHandler = this.mouseUp.bind(this);
        this.mazeElement.addEventListener('mousedown',this.mouseDownHandler);
    }
    async disconnectedCallback(){
        this.mazeElement.removeEventListener('mousedown',this.mouseDownHandler);
        this.mouseDownHandler = null;
        this.mouseOverHandler = null;
        this.mouseUpHandler = null;
        this.mazeElement = null;
        this.selectedElementSize = null;
        this.divElement = null;
        this.divSize = null;
    }

    mazeSizeChanged(selectedValue){
        this.selectedElementSize = selectedValue.split("x").map(result => Number(result));
        this._createMaze(this.selectedElementSize[0],this.selectedElementSize[1]);
    }
    _createMaze(gridRows,gridColumns){
        this.divSize = gridRows * 2;
        this.mazeElement.style = `width:${this.divSize}rem; height:${this.divSize}rem`;
        this.mazeElement.innerHTML = "";
        this.mazeElement.style.gridTemplate = `repeat(${gridRows},2rem)/repeat(${gridColumns},2rem)`;

        const fragment = document.createDocumentFragment();
        for(let i = 0; i <gridRows; i++){
            for(let j = 0; j < gridColumns; j++){
                this.divElement = document.createElement("div");
                this.divElement.classList.add("gap");

                //need to add data attributes to differentiate between walls and gaps.
                this.divElement.dataset.typeRow = i;
                this.divElement.dataset.typeColumn = i;
                
                this.wallDataset = this.divElement.dataset.typeRow;
                this.endValue = gridRows - 1;

                console.log(this.endValue);
                this.divElement.style.backgroundColor = this.wallDataset  == "0" || this.wallDataset == this.endValue ? (this.divElement.classList.add("wall"),this.divElement.classList.remove("gap"))
                    :(this.divElement.classList.add("gap"),this.divElement.classList.remove("wall"));



                fragment.appendChild(this.divElement);
            }
        }
        this.mazeElement.appendChild(fragment);
    }
    mouseDown(event){
            this._changeColor(event);
            this.mazeElement.addEventListener('mouseover',this.mouseOverHandler);
            this.mazeElement.addEventListener('mouseup',this.mouseUpHandler);
            event.stopPropagation();
            event.preventDefault();
    }
    mouseOver(event){
            this._changeColor(event);
            event.stopPropagation();
    }
    mouseUp(event){
        this.mazeElement.removeEventListener('mouseover',this.mouseOverHandler);
        this.mazeElement.removeEventListener('mouseup',this.mouseUpHandler);
        event.stopPropagation();
    }
    _changeColor(event){

        console.log(this.wallDataset);
        event.target.style.backgroundColor = event.buttons == 1 ? (event.target.classList.add("wall"),event.target.classList.remove("gap"))
            :(event.target.classList.add("gap"),event.target.classList.remove("wall"));

    }
}
customElements.define("maze-escape-component", MazeEscapeComponent);
