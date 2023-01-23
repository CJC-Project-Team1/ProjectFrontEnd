import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { NotifierService } from 'src/app/shared/notifier.service';

@Component({
  selector: 'app-view-applicaion',
  templateUrl: './view-applicaion.component.html',
  styleUrls: ['./view-applicaion.component.css']
})
export class ViewApplicaionComponent {

  enq: Enquiry[];
  //pagination
  page: number = 1;
  count: number = 0;
  tableItems: number = 5;
  tableSizes: any = [2, 4, 6, 8];
   filteredEnqs:Enquiry[];
  _filterText:string = '';

  constructor(private es: EnquiryService, private route: Router,private notify:NotifierService) { }

  ngOnInit() {
    this.filteredEnqs=this.enq;
   this.getData();
   this.notify.info("ENQUIRY LIST","TABLE");
   
   
 
  }

  getData() {
    this.es.get().subscribe((enqList: Enquiry[]) => {
      this.enq = enqList;
    })

  }


  get filterText()
  {
    return this._filterText;
  }

  set filterText(value:string)
  {
    this._filterText = value;
    this.filteredEnqs = this.filterEnqByStatus(value);
  }



  filterEnqByStatus(filterTerm:string)
  {
    if(this.enq.length === 0 || this.filterText === '')
    {
      return this.enq;
    }
    else
    {
      return this.enq.filter((enquiry)=>{
        return enquiry.enquiryStatus.toLowerCase() === filterTerm.toLowerCase();
      });
    }
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
