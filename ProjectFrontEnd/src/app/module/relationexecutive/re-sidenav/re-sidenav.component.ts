import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-re-sidenav',
  templateUrl: './re-sidenav.component.html',
  styleUrls: ['./re-sidenav.component.css']
})
export class ReSidenavComponent {

  @Input() sideNavStatus:boolean=false;

  role:string

  ngOnInit(){
    this.role=sessionStorage.getItem("role");
  }  

  list=[
    {
      RE:[
        {
          number:'1',
          name:'Home',
          icon:'fa fa-home',
          path:'homepage'
        },
        {
          number:'2',
          name:'Register Enquiry',
          icon:'fa fa-pencil-square-o',
          path:'enquiry'
        },
        {
          number:'3',
          name:'View Application',
          icon:'fa fa-eye',
          path:'viewEnq'
        },
        {
          number:'4',
          name:'Update Enquiry',
          icon:'fa fa-file-text',
          path:'viewEnq/updateEnq'
        },
        {
          number:'5',
          name:'Approved Loan',
          icon:'fa fa-envelope-open',
          path:'sanction'
        }
      ],
      OE:[
        {
          number:'1',
          name:'Loan Registration',
          icon:'fa fa-pencil-square-o',
          path:'loanReg'
        },
        {
          number:'2',
          name:'Enquiry Approval',
          icon:'fa fa-check-square-o',
          path:'approval'
        },
        {
          number:'3',
          name:'Cibil Check',
          icon:'fa fa-star',
          path:'cibil'
        },
        {
          number:'4',
          name:'Correspondance',
          icon:'fa fa-envelope',
          path:'mail'
        }
      ],
      ADMIN:[
        {
          number:'1',
          name:'Add Employee',
          icon:'fa fa-pencil-square-o',
          path:'addEmp'
        },
        {
          number:'2',
          name:'View Employees',
          icon:'fa fa-check-square-o',
          path:'viewEmp'
        },
        {
          number:'3',
          name:'Leave Applications',
          icon:'fa fa-star',
          path:'leaveApp'
        }
      ],
      CM:[
        {
          number:'1',
          name:'Loan Application',
          icon:'fa fa-envelope',
          path:'application'
        },
        {
          number:'2',
          name:'Previous Loan',
          icon:'fa fa-hand-o-up',
          path:'prevLoan'
        }
      ],
      AH:[
        {
          number:'1',
          name:'Final Applications',
          icon:'fa fa-check',
          path:'approvedApp'
        }
      ],
      TH:[
        {
          number:'1',
          name:'Defaulters',
          icon:'fa fa-exclamation-triangle',
          path:'defaulter'
        }
      ]
    }
    
    
  ]
}
