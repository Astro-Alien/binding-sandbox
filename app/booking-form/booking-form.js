export default class BookingForm extends crsbinding.classes.ViewBase {
    async connectedCallback() {
        await super.connectedCallback();
    }

    preLoad() {
        this.setProperty("firstName", "John");
        this.setProperty("lastName", "Doe");
        this.setProperty("Age", "20");
        this.setProperty("ageRange", "20");
    }


}