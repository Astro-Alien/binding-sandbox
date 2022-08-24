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
        this.addEventListener('mousedown',this.mouseDownHandler);


    }
    async disconnectedCallback(){
        this.removeEventListener('mousedown',this.mouseDownHandler);
        this.mouseDownHandler = null;
        this.mouseOverHandler = null;
        this.mouseUpHandler = null;
        this.mazeElement = null;
        this.selectedElementSize = null;
        this.divElement = null;

    }

    mazeSizeChanged(selectedValue){
        this.selectedElementSize = selectedValue.split("x").map(result => Number(result));
        this._createMaze(this.selectedElementSize[0],this.selectedElementSize[1]);
    }
    _createMaze(gridRows,gridColumns){
        this.mazeElement.innerHTML = "";
        this.mazeElement.style.gridTemplate = `repeat(${gridRows},2rem)/repeat(${gridColumns},2rem)`;

        const fragment = document.createDocumentFragment();
        for(let i = 0; i <gridRows * gridColumns; i++){
               this.divElement = document.createElement("div");
               this.divElement.classList.add("gap");
               fragment.appendChild(this.divElement);

        }
        this.mazeElement.appendChild(fragment);
    }
    mouseDown(event){
            event.target.style.background = "black";
            this.addEventListener('mouseover',this.mouseOverHandler);
            this.addEventListener('mouseup',this.mouseUpHandler);
    }
    mouseOver(event){
             event.target.style.background = "black";
    }
    mouseUp(event){
        this.removeEventListener('mouseover',this.mouseOverHandler);
        this.removeEventListener('mouseup',this.mouseUpHandler);
    }

}
customElements.define("maze-escape-component", MazeEscapeComponent);