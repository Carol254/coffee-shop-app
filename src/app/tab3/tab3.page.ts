import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

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
