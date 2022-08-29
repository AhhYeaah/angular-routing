import { Component, OnInit, Input, ContentChildren } from '@angular/core';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-exp',
  templateUrl: './button-exp.component.html',
  styleUrls: ['./button-exp.component.sass']
})
export class ButtonExpComponent implements   OnInit {

  constructor() { 

  }
  arrowOpen = faArrowRight;
  arrowClose = faArrowDown;

  isActive : boolean = false
  @Input() optName : string = "";
  @ContentChildren('option') aList :any;
  @ContentChildren(ButtonExpComponent) expList :any;
  @Input() instance : ButtonExpComponent | undefined;
  
  ngOnInit(): void {
  }


  ngAfterContentChecked(){
    if(this.instance != undefined){
      this.optName = this.instance?.optName
      this.aList = this.instance?.aList
      this.expList = this.instance?.expList
    }
  }
}
