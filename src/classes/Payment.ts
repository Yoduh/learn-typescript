import { HasFormatter } from "../interfaces/HasFormatter";

export class Payment implements HasFormatter {
    //     combine constructor with variable decleration (access modifiers required when doing this!)
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format() {
        //this.client = "asfd" // error because readonly
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }

    getDetails() {
        return this.details;
    }
}