import { Borrower } from "./borrower";
import { Emi } from "./emi";


export class SanctionedLoanDetails {
    sanctionedLoanId:number;
	sanctionedLoanAmount:string;
	sanctionedLoanTenure:string;
	rateOfInterest:string;
	monthlyEmi:number;
	sanctionLetter:any;
	borrower:Borrower;
	emilist:Emi[];
}
