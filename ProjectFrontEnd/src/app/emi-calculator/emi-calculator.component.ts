import { PropertyWrite } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {

  constructor(private fb:FormBuilder){}

  result:string
  emiform:FormGroup

  ngOnInit(){
    this.emiform=this.fb.group({
      principal:[],
      roi:[],
      count:[]
    })
  }

  calculate(){
    let r=this.emiform.get('roi').value/1200
    let p=this.emiform.get('principal').value
    let n=this.emiform.get('count').value

    let num=p*r*Math.pow((1+r),n) 
    let deno=(Math.pow((1+r),n)-1)
    let temp=num/deno
    this.result='Montly EMI is Rs. '+temp.toFixed(2)+' for '+n+' months'
  }



}
