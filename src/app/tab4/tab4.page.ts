import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  @ViewChild(IonModal)modal!: IonModal;

  message:any;

  constructor(
    private router:Router,
    public alertCtrl:AlertController
    ) { }

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

  editProfile(){
    this.router.navigate(['/profile/edit-profile']);
  }

  async logOut(){
    const logout = await this.alertCtrl.create({
      header:'LogOut',
      message:'Are you sure you would like to logout?',
      buttons:[
        {
          text:'NO',
          handler: () =>{
            console.log('Cancel clicked');
          }
        },
        {
          text:'YES',
          handler: () =>{
            console.log('Yes clicked');
            this.router.navigate(['/login'])
          }
        }
        
      ]
    });

    logout.present();
  }
}
