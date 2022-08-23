 export class BookingComponent extends HTMLElement {

     async connectedCallback() {
         this.innerHTML = await fetch(
             import.meta.url.replace(".js", ".html")).then(result => result.text());

         this.ageElement = this.querySelector("#age");
         this.rangeElement = this.querySelector("#range");
         this.messageElement =  this.querySelector(".message");
         this.selectDataAttributeHandler = this._selectDataAttribute.bind(this);
         this.addEventListener("change",this.selectDataAttributeHandler);

     }
     async disconnectedCallback(){
         this.removeEventListener("change",this.selectDataAttribute);
         this.selectDataAttribute =null;
         this.ageElement = null;
         this.rangeElement = null;
         this.messageElement = null;
     }
     _selectDataAttribute(event){
         this[event.target.dataset.value](event);
     }
     firstName(event){
         this.nameElement = event.target.value;
     }
     lastName(event){
         this.surnameElement = event.target.value;
         this._updateBookingMessage();
     }
     age(event){
         this.ageElement.value =event.target.value;
         this.rangeElement.value = this.ageElement.value;
         this._changeMessageColor();
     }
     _updateBookingMessage(){
         this.messageElement.textContent = "Booking for " + this.nameElement + " "+ this.surnameElement;
     }
     _changeMessageColor(){
         return (this.ageElement.value < 20 && this.rangeElement.value < 20 ? this.messageElement.style.color = "red":this.messageElement.style.color = "blue");
     }
 }
 customElements.define("booking-component", BookingComponent);