import { Emi } from "./emi";

export class SanctionedLoanDetails {
    sanctionedLoanId:number;
	sanctionedLoanAmount:string;
	sanctionedLoanTenure:string;
    customerName:string;
	customerId:string;
	monthlyEmi:Number;
	emi:Emi;

}
