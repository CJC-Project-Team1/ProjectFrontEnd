import { Component } from '@angular/core';
import {Chart,registerables} from 'node_modules/chart.js'
Chart.register(...registerables)

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  ngOnInit(){

    this.renderChart()
    this.renderChart1()
  }

  renderChart(){

    new Chart("pieChart", {
      type: 'doughnut',
      data: {
        labels: ['Enquiry', 'Rejected', 'Loan Registered', 'Pending', 'Sanctioned', 'NPA'],
        datasets: [{
          label: 'Applications',
          data: [521, 59, 398, 102, 168, 36],
          backgroundColor:[
            'rgba(7, 118, 245,0.8)',
            'rgba(245, 11, 7,0.8)',
            'rgba(245, 213, 7,0.8)',
            'rgba(245, 126, 7,0.8)',
            'rgba(27, 245, 7,0.8)',
            'rgba(245, 7, 209,0.8)'
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
