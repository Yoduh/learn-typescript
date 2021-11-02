import { HasFormatter } from "../interfaces/HasFormatter";

export class Invoice implements HasFormatter {
    // default access = public
    readonly client: string;
    private details: string;
    public amount: number;


    constructor(c: string, d: string, a: number) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    //     combine constructor with variable decleration (access modifiers required when doing this!)
    //     constructor(
    //         readonly client: string,
    //         private details: string,
    //         public amount: number
    //     ){}

    format() {
        //this.client = "asfd" // error because readonly
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }

    getDetails() {
        return this.details;
    }
}