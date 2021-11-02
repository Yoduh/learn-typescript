export class Invoice {
    constructor(c, d, a) {
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
