import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Borrower } from 'src/app/model/borrower';
import { Emi } from 'src/app/model/emi';
import { Employee } from 'src/app/model/employee';
import { Enquiry } from 'src/app/model/enquiry';
import { SanctionedLoanDetails } from 'src/app/model/sanctioned-loan-details';
import { BorrowerService } from 'src/app/shared/borrower.service';
import { EmiService } from 'src/app/shared/emi.service';
import { EnquiryService } from 'src/app/shared/enquiry.service';
import { SanctionedLoanDetailsService } from 'src/app/shared/sanctioned-loan-details.service';

@Component({
  selector: 'app-re-header',
  templateUrl: './re-header.component.html',
  styleUrls: ['./re-header.component.css']
})
export class ReHeaderComponent {

  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;
  title: string
  e: Employee
  count:number=0;

  constructor(private router: Router, private es:EnquiryService, 
    private bs:BorrowerService, private ss:SanctionedLoanDetailsService,
    private emis:EmiService) { }

  SideNavToggled() {
    this.menuStatus = !this.menuStatus
    this.sideNavToggled.emit(this.menuStatus)
  }

  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem("employee")) != null) {
      this.e = JSON.parse(sessionStorage.getItem("employee"))
      this.title = this.e.employeeName
      this.notifyCount();

    }
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(['header', 'login'])
  }

  notify() 
  {
    console.log('on notif')
    if (sessionStorage.getItem('role') === 'OE') {
      this.router.navigate(['reHome', 'oeNotify']);
    }
    else if (sessionStorage.getItem('role') === 'CM') {
      this.router.navigate(['reHome', 'cmNotify']);
    }
    else if (sessionStorage.getItem('role') === 'AH') {
      this.router.navigate(['reHome', 'ahNotify']);
    }
    else if (sessionStorage.getItem('role') === 'TH') {
      this.router.navigate(['reHome', 'thNotify']);
    }

  }

  notifyCount()
  {
    if (sessionStorage.getItem('role') === 'OE') {
      this.getEnqs();
    }
    else if (sessionStorage.getItem('role') === 'CM') {
      this.getbrws();
    }
    else if (sessionStorage.getItem('role') === 'AH') {
      this.getsls();
    }
    else if (sessionStorage.getItem('role') === 'TH') {
      this.getEmis();
    }
  }

  getEnqs()
  {
    this.es.get().subscribe((es:Enquiry[])=>{
      es.forEach(e=>{
        if(e.enquiryStatus=="OPEN")
        {
          this.count = this.count + 1;
        }
      })
    });
  }

  getbrws()
  {
    this.bs.getBrwr().subscribe((brs:Borrower[])=>{
      brs.forEach(b=>{
        if(b.applicationStatus == "Under review")
        {
          this.count = this.count + 1;
        }
      })
    })
  }

  getsls()
  {
    this.ss.getAllSanLoan().subscribe((sls:SanctionedLoanDetails[])=>{
      sls.forEach(sl=>{
        if(sl.borrower.applicationStatus=="Approved")
        {
          this.count = this.count + 1;
        }
      })
    })
  }

  getEmis()
  {
    this.emis.getAllEmi().subscribe((ems:Emi[])=>{
      ems.forEach(e=>{
        if(e.defautlerCount!=0)
        {
          this.count = this.count + 1;
        }
      })
    })
  }
}
