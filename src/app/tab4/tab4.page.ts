import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  @ViewChild(IonModal)modal!: IonModal;

  message:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

  confirm(){
    this.modal.dismiss(this.message ,'confirm');
  }

  onWillDimiss(event:Event){
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if(ev.detail.role === 'confirm'){
      this.message = this.router.navigate(['/login']);
      ev.detail.data = this.message;
    }
  }

}
