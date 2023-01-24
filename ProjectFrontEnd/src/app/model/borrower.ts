import { AppliedLoan } from "./applied-loan";
import { BorrowerBankDetails } from "./borrower-bank-details";
import { BorrowerDocuments } from "./borrower-documents";
import { BusinessDetails } from "./business-details";
import { PreviousLoanDetails } from "./previous-loan-details";

export class Borrower {
    borrowerId:number;
	borrowerName:string;
	dateOfBirth:string;
	emailId:string;
	contactNo:number;
	adharNo:number;
	panNo:string;
	address:string;
	documentStatus:string;
	gstNo:string;
	bankDetails:BorrowerBankDetails;
	businessDetails:BusinessDetails ;
	loanHistory:PreviousLoanDetails;
	borrowerDocuments:BorrowerDocuments ;
	appliedLoan:AppliedLoan ;
	applicationStatus:string; 
}
