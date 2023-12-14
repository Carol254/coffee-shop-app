import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  options:any[] =[];

  time: Date = new Date() ;
  currentTime: any;

  timeOfDay:any= [
    {
      t1:'Morning'
    },
    {
      t2:'Afternoon'
    },
    {
      t3:'Evening'
    }
  ]

  constructor() {}

  ngOnInit(): void {
      this.options = [
        {
          name:'Filter'
        },
        {
          name:'Espresso'
        },
        {
          name:'Cappuccino'
        },
        {
          name:'latte'
        }
      ]

      if(this.getValidTime() == 0 || this.getValidTime() <= 11){
        this.timeOfDay.t1 = this.getValidTime();
        this.currentTime = this.timeOfDay[0].t1;
      }else if(this.getValidTime() == 12 || this.getValidTime() <= 16){
        this.timeOfDay.t2 = this.getValidTime();
        this.currentTime = this.timeOfDay[1].t2;
      }else {
         this.timeOfDay.t3 = this.getValidTime();
         this.currentTime = this.timeOfDay[2].t3;  
      }
  
  }

  getValidTime(){
    return this.time.getHours();
  }
 
}
