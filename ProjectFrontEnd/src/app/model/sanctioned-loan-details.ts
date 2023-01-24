import { Borrower } from "./borrower";


export class SanctionedLoanDetails {
    sanctionedLoanId:number;
	sanctionedLoanAmount:string;
	sanctionedLoanTenure:string;
	rateOfInterest:string;
	monthlyEmi:Number;
	sanctionLetter:any;
	borrower:Borrower;
}
