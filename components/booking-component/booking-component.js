 export class BookingComponent extends HTMLElement {

     async connectedCallback() {
         this.innerHTML = await fetch(
             import.meta.url.replace(".js", ".html")).then(result => result.text());

         this.messageElement = this.querySelector("#message");


         requestAnimationFrame(() => {
             this.updateBookingMessageHandler = this._updateBookingMessage.bind(this);
             this.addEventListener("change", this.updateBookingMessageHandler);
         })
     }

     async disconnectedCallback() {
         this.removeEventListener("change", this.updateBookingMessageHandler);
         this.updateBookingMessageHandler = null;
         this.messageElement = null;
     }

     _updateBookingMessage(event) {

         this[event.target.dataset.id](event);

     }

     firstName(event){
         this.dataset.name = event.target.value;
     }
     lastName(event){
         this.dataset.surname = event.target.value;
         this.messageElement.textContent = "Booking for "+ this.dataset.name + " " + this.dataset.surname;
     }



 }
 customElements.define("booking-component", BookingComponent);