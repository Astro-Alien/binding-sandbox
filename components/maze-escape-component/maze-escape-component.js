class MazeEscapeComponent extends crsbinding.classes.BindableElement{
    get html(){
        return import.meta.url.replace(".js",".html");
    }
    async connectedCallback() {
       await super.connectedCallback();
    }

    async disconnectedCallback(){
        this.size = null;

    }

    selectedSize(event){
      this.size = event.target.value;

    }


}
customElements.define("maze-escape-component", MazeEscapeComponent);