import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  isHomeSelected: boolean = false;

  constructor(private router:Router) {}

  isHomeTab():boolean{
    return this.router.url === '/home';
  }

  isFavouriteTab():boolean{
    return this.router.url === '/favourite';
  }

}
