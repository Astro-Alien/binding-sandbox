export default class MazeEscapeComponent extends HTMLElement{
    async connectedCallback() {

        this.innerHTML = await fetch(import.meta.url.replace(".js",".html")).then(result => result.text());

        requestAnimationFrame(()=>{

            this.sizeSelectElement = this.querySelector("#size");

        });
    }
    async disconnectedCallback(){
        this.sizeSelectElement = null;
    }



}
customElements.define("maze-escape-component", MazeEscapeComponent);