class MazeEscapeComponent extends crsbinding.classes.BindableElement{
    get html(){
        return import.meta.url.replace(".js",".html");
    }
    async connectedCallback() {
        await super.connectedCallback();
        this.mazeElement = this.querySelector(".maze");
        this.createMaze(10, 10);
    }

    async disconnectedCallback(){
        this.mazeElement = null;
        this.selectedElementSize = null;
        this.divElement = null;
    }

    mazeSizeChanged(selectedValue){
        this.selectedElementSize = selectedValue.split("x").map(result => Number(result));
        this.createMaze(this.selectedElementSize[0],this.selectedElementSize[1]);
    }
    createMaze(gridRows,gridColumns){
        this.mazeElement.innerHTML = "";
        this.mazeElement.style.gridTemplate = `repeat(${gridRows},2rem)/repeat(${gridColumns},2rem)`;

        for(let i = 0; i <gridRows * gridColumns; i++){
               this.divElement = document.createElement("div");
               this.divElement.classList.add("gap");

               this.mazeElement.appendChild(this.divElement);

        }
    }



}
customElements.define("maze-escape-component", MazeEscapeComponent);