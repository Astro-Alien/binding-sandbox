class MazeEscapeComponent extends crsbinding.classes.BindableElement{
    get html(){
        return import.meta.url.replace(".js",".html");
    }
    async connectedCallback() {
       await super.connectedCallback();

       this.mazeElement = this.querySelector(".maze");

    }

    async disconnectedCallback(){
        this.sizeValue = null;
        this.mazeElement = null;
        this.selectedElementSize = null;
    }
    preLoad(){
        this.setProperty("mazeSizes", "10x10");
    }

    mazeSizeChanged(selectedValue){
        this.selectedElementSize = selectedValue.split("x").map(result => Number(result));
        this.sizeValue = this.selectedElementSize[0];
        this.createMaze();
    }
    createMaze(){
        this.dimensions = this.sizeValue * 2;
        this.mazeElement.style = `width: ${this.dimensions}rem; height:${this.dimensions}rem`;
        this.mazeElement.style.gridTemplate = `repeat(${this.sizeValue},2rem)/repeat(${this.sizeValue},2rem)`;
    }


}
customElements.define("maze-escape-component", MazeEscapeComponent);