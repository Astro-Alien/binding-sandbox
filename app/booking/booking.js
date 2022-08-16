export default class Booking extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();

        this._bookingMessage();
    }

    async disconnectedCallback() {
        this.formElement.removeEventListener("change", this.changeHandler);

        this.changeHandler = null;
        this.nameElement = null;

        this.surnameElement = null;
        this.messageElement = null;

        this.ageElement = null;
        this.rangeElement = null;

        this.formElement = null;
    }

    /**
     * method is responsible for:
     *  -Getting elements
     *  -Assigning elements to variables 
     *  -Initiating event handler
     */
    _bookingMessage() {

        this.nameElement = document.querySelector("#firstName");
        this.surnameElement = document.querySelector("#lastName");
        this.messageElement = document.querySelector("#message");

        this.ageElement = document.querySelector("#Age");
        this.rangeElement = document.querySelector("#Range");

        this.formElement = document.querySelector("form");

        this.messageElement.textContent = "Booking for " + this.nameElement.value + " " + this.surnameElement.value;

        this.changeHandler = this._eventFunctionality.bind(this);

        this.formElement.addEventListener("change", this.changeHandler);

    }

    /**
     * 
     * @param {Event} event  change event
     * updates current elements
     */
    _eventFunctionality(event) {
            if (event.target == this.nameElement || event.target == this.surnameElement) {
                this.messageElement.textContent = "Booking for " + this.nameElement.value + " " + this.surnameElement.value;
            }
            if (event.target == this.ageElement) {
                this.rangeElement.value = this.ageElement.value;
                this._ageValidation(this.ageElement.value);
            }
            if (event.target == this.rangeElement) {
                this.ageElement.value = this.rangeElement.value;
                this._ageValidation(this.rangeElement.value);
            }

        }
        /**
         * 
         * @param {Event} ageRange 
         * Responsible for validating the age and adjusting the colour of the message accordingly
         */
    _ageValidation(ageRange) {

        if (ageRange < 20) {
            this.messageElement.style.color = "red";
        } else {
            this.messageElement.style.color = "blue";
        }

    }




}