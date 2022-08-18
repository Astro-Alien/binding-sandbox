 export class BookingComponent extends HTMLElement {

     async connectedCallback() {
         this.innerHTML = await fetch(
             import.meta.url.replace(".js", ".html")).then(result => result.text());
         this.objectElement = {
             firstName: "John",
             lastName: "Doe",
             age: 20
         }
         requestAnimationFrame(() => {
             this.updateBookingMessageHandler = this._updateBookingMessage.bind(this);
             this.addEventListener("change", this.updateBookingMessageHandler);
         })
     }

     async disconnectedCallback() {
         this.removeEventListener("change", this.updateBookingMessageHandler);
         this.updateBookingMessageHandler = null;
         this.objectElement = null;
         this.elementType =null;
         this.messageElement = null;


     }

     _updateBookingMessage(event) {
        this.elementType = event.target.dataset.value;
        this.messageElement = this.querySelector("#message");
        this.objectElement[this.elementType] = event.target.value;
        this.messageElement.textContent = "Booking for " + this.objectElement.firstName + " "+
            this.objectElement.lastName;

     }




 }
 customElements.define("booking-component", BookingComponent);