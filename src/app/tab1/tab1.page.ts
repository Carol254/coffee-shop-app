import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icon } from 'ionicons/dist/types/components/icon/icon';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

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

  constructor(private router:Router) {}

  ngOnInit(): void {
    this.options = [
      {
        name:'Filter',
        icon: 'filter'
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

back(){
  this.router.navigate(['/home']);
}



}
