import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-sanctioned-loan',
  templateUrl: './sanctioned-loan.component.html',
  styleUrls: ['./sanctioned-loan.component.css']
})
export class SanctionedLoanComponent {

  makePDF()
  {
    let pdf =new jsPDF();
    pdf.text("DEmo",10,10);
    pdf.save();
  }
}
