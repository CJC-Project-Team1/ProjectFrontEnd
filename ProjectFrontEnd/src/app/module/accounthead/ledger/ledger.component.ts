import { Component } from '@angular/core';
import { Emi } from 'src/app/model/emi';
import { EmiService } from 'src/app/shared/emi.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent {
  emi:Emi[];

  constructor(private es:EmiService) { }


  ngOnInit()
   {
    this.es.getAllEmi().subscribe((data: Emi[]) => {
      this.emi= data;
    });
  }

  paid(e: Emi) {
    alert("in emistatuschange")
       e.emiStatus='paid';
       this.es.updateEmi(e).subscribe();
     }
}
