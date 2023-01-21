import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Borrower } from 'src/app/model/borrower';
import { BorrowerService } from 'src/app/shared/borrower.service';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent {

  brwr:Borrower;

    //pagination
    page: number = 1;
    count: number = 0;
    tableItems: number = 5;
    tableSizes: any = [2, 4, 6, 8];

  constructor(private bs:BorrowerService,private actvRout:ActivatedRoute,private loctn:Location){}

  ngOnInit()
  {
    this.getData();
  }

  getData()
  {
    this.actvRout.paramMap.subscribe(brwrData=>{
      this.bs.getBrwrById(parseInt(brwrData.get('id'))).subscribe(data=>{
        this.brwr=data;
      })
    })
  }

  getBack()
  {
    this.loctn.back();
  }


  onTableData(event:any)
  {
    this.page=event;
    this.getData();
  }

  onTableSize(event:any)
  {
    this.tableItems=event.target.value;
    this.page=1;
    this.getData();
  }

}
