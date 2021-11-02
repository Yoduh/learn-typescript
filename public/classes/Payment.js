export class Payment {
    //     combine constructor with variable decleration (access modifiers required when doing this!)
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //this.client = "asfd" // error because readonly
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
    getDetails() {
        return this.details;
    }
}
