import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ResultsService } from '../services/results.service';
import { SearchResultsPage } from '../search-results/search-results.page';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  options:any[] =[];
  search:string = '';

  

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

  constructor(private router:Router , private resultService:ResultsService ,public navCtrl:NavController) {}

  ngOnInit(): void {
    this.options = [
      {
        name:'Mocha',
        icon: 'filter'
      },
      {
        name:'Espresso',
        icon: 'filter'
      },
      {
        name:'Cappuccino',
        icon: 'filter'
      },
      {
        name:'latte',
        icon: 'filter'
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
  this.router.navigate(['/login']);
}

getSearch(event:any){
  event.preventDefault();
  this.resultService.query = this.search;
  this.router.navigate(['/search-results',{data:this.search}]);
  this.search = '';
}

searchOptions(res:any){
  this.resultService.query = res;
  this.router.navigate(['/search-results',{data:res}]);
}


}
