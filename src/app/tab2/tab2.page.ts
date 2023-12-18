import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  
  currentVal:number = 1;
  
  decselected:boolean = false;
  increselected:boolean = false;

  constructor() {}
  ngOnInit(): void {
      
  }

  increase(){
    this.increselected = true;
    this.decselected = false;
    this.currentVal ++;

  }
  decrease(){
    this.decselected = true;
    this.increselected = false;
    if(this.currentVal > 1){
      this.currentVal --;
    }
  }
 
}
