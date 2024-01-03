import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { HammerGestureConfig } from '@angular/platform-browser';
import { GestureController } from '@ionic/angular';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(private gestureCtrl: GestureController ) {}


  @ViewChild('cardEl')cardElRef!: ElementRef;

  swipedLeft: boolean = false;
  
  coffeeTypes:any =[
    {
      name:'Espresso',
      extras:'with Milk',
      price:'$6.75',
      orders: '',
      image:'/assets/latte.jpg'
    },
    {
      name:'Espresso',
      extras:'with Cream + Cookies',
      price:'$6.75',
      image: '/assets/cappucino.jpg',
      orders: ''
    },
    {
      name:'Cappuccino',
      extras:'with Cream + Cookies',
      price:'$18.99',
      orders: '',
      image: '/assets/instant-coffee.jpg'
    }
  ]

  onSwipeRight(event: any ,coffeeType:any) {
     const swipeDirection = Math.abs(event.deltaX) > 40 ? (event.deltaX > 0 ? 'right' :'left'): '';

     switch(swipeDirection){
      case 'left':{
        coffeeType.swipedLeft = true;
        console.log('swiped left');
        break
      }
      case 'right':{
        coffeeType.swipedLeft = false;
        console.log('swiped right');
        break;
      }
     }
  }
  

}
