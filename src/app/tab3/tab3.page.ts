import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { GestureController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(private gestureCtrl: GestureController ) {}


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

}
