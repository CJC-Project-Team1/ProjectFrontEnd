import { Component } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js';
import { Enquiry } from 'src/app/model/enquiry';
import { EnquiryService } from 'src/app/shared/enquiry.service';
Chart.register(...registerables)

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private es:EnquiryService){}
  enq:number[]=[];
  enqNo:number;
  ap:number=0
  rj:number=0
  open:number=0
  ngOnInit(){
    this.es.get().subscribe((e:Enquiry[])=>{
      // console.log(e.length)
      this.enqNo=e.length
      // e.forEach(eq=>{ 
      //   if(eq.enquiryStatus==="Approved")
      //   {
      //     this.ap++
      //   }

      // })
      for (let i = 0; i < e.length; i++) {
        if(e[i].enquiryStatus==="Approved")
        {
          ++this.ap
        }
        if(e[i].enquiryStatus==="Rejected")
        {
          ++this.rj
        }
        if(e[i].enquiryStatus==="OPEN")
        {
          ++this.open
        }
      }
      // console.log(this.ap)
      // console.log(this.rj)
      this.enq.push(this.enqNo,this.rj,this.ap,this.open)
    })
    console.log(this.enq)
    this.renderChart()
    this.renderChart1()
  }

  renderChart(){
    new Chart("pieChart", {
      type: 'doughnut',
      data: {
        labels:['Enquiry','Rejected','Approved','Open'],
        datasets: [{
          label: 'Applications',
          data: this.enq,
          backgroundColor:[
            'rgba(7, 118, 245,0.8)',
            'rgba(245, 11, 7,0.8)',
            'rgba(27, 245, 7,0.8)',
            'rgba(245, 213, 7,0.8)',
            //'rgba(245, 126, 7,0.8)',
            // 'rgba(245, 7, 209,0.8)'
          ],
          borderWidth: 1
        }]
        
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // }
    });
  }

  renderChart1(){

    new Chart("polarChart", {
      type: 'bar',
      data: {
        labels: ['Secured MSME', 'Loan Against Gold', 'Overdraft', 'Refinance', 'Export Credit', 'Equipment Loan'],
        datasets: [{
          label: 'Amount in Rs(lakhs)',
          data: [27, 25, 23, 18, 21, 17],
          backgroundColor:[
            'rgba(245, 11, 7,0.8)',
            'rgba(7, 118, 245,0.8)',
            'rgba(245, 213, 7,0.8)',
            'rgba(27, 245, 7,0.8)',
            'rgba(245, 7, 209,0.8)',
            'rgba(245, 126, 7,0.8)',
          ],
          borderWidth: 1
        }]
      },
      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true
      //     }
      //   }
      // }
    });
  }
}
