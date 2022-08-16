export default class Booking extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();

        this.bookingMessage();
    }

    bookingMessage() {
        const name = document.querySelector("#firstName");
        const surname = document.querySelector("#lastName");
        const message = document.querySelector("#message");

        const age = document.querySelector("#Age");
        const range = document.querySelector("#Range");

        message.textContent = "Booking for " + name.value + " " + surname.value;

        document.addEventListener("change", (event) => {
            if (event.target == name || event.target == surname) {
                message.textContent = "Booking for " + name.value + " " + surname.value;
            }
            if (event.target == age) {
                range.value = age.value;
                this.ageValidation(age.value);
            }
            if (event.target == range) {
                age.value = range.value;
                this.ageValidation(range.value);
            }
        });

    }

    ageValidation(ageRange) {

        if (ageRange < 20) {
            message.style.color = "red";
        } else {
            message.style.color = "blue";
        }

    }

    async disconnectedCallback() {
        document.removeEventListener("change", (event) => {
            if (event.target == name || event.target == surname) {
                message.textContent = "Booking for " + name.value + " " + surname.value;
            }
            if (event.target == age) {
                range.value = age.value;
                this.ageValidation(age.value);
            }
            if (event.target == range) {
                age.value = range.value;
                this.ageValidation(range.value);
            }
        });
    }
}