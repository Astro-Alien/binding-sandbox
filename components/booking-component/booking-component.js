 export class BookingComponent extends HTMLElement {

     async connectedCallback() {
         this.innerHTML = await fetch(
             import.meta.url.replace(".js", ".html")).then(result => result.text());

         requestAnimationFrame(() => {
             this.updateBookingMessageHandler = this._updateBookingMessage.bind(this);
             this.addEventListener("change", this.updateBookingMessageHandler);
         })
     }

     async disconnectedCallback() {
         this.removeEventListener("change", this.updateBookingMessageHandler);
         this.updateBookingMessageHandler = null;

     }

     _updateBookingMessage(event) {



     }




 }
 customElements.define("booking-component", BookingComponent);