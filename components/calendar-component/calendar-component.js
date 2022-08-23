export class CalendarComponent extends HTMLElement{

    async connectedCallback(){
        this.innerHTML = await fetch(import.meta.url.replace(".js",".html")).then(result => result.text());
    }
}
customElements.define("calendar-component",CalendarComponent);