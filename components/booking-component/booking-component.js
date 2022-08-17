 export class BookingComponent extends HTMLElement {

     async connectedCallback() {
         this.innerHTML = await fetch(
             import.meta.url.replace(".js", ".html")).then(result => result.text());

         this.formElement = this.querySelector("form");
         this.updateHandler = this._updateBookingMessage.bind(this);

         requestAnimationFrame(() => {
             this.formElement.addEventListener("change", this.updateHandler);
         })
     }

     async disconnectedCallback() {
         this.formElement.removeEventListener("change", this.updateHandler);
         this.updateHandler = null;
         this.formElement = null;
     }

     _updateBookingMessage(event) {

     }
 }
 customElements.define("booking-component", BookingComponent);