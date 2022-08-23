class MazeEscapeComponent extends crsbinding.classes.BindableElement{
    get html(){
        return import.meta.url.replace(".js",".html");
    }
    async connectedCallback() {
        await super.connectedCallback();
        this.mazeElement = this.querySelector(".maze");
        this._createMaze(10, 10);
    }

    async disconnectedCallback(){
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
    
}
customElements.define("maze-escape-component", MazeEscapeComponent);