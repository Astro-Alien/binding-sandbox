export default class Booking extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
        this.bookingMessage();
    }

    bookingMessage() {
        const name = document.querySelector("#firstName");
        const surname = document.querySelector("#lastName");
        const message = document.querySelector("#message");

        surname.addEventListener("change", (event) => {
            message.textContent = "Booking for " + name.value + " " + surname.value;

        });
        this.ageFunctionality();
    }

    ageFunctionality() {
        const age = document.querySelector("#Age");
        const range = document.querySelector("#Range");

        age.addEventListener("change", (event) => {
            range.value = age.value;
            this.ageValidation(age.value);
        });

        range.addEventListener("change", (event) => {
            age.value = range.value;
            this.ageValidation(range.value);
        })
    }

    ageValidation(ageRange) {

        if (ageRange < 20) {
            message.style.color = "red";
        } else {
            message.style.color = "blue";
        }

    }


}