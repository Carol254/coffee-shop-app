import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  imageUrl!: SafeResourceUrl;
  myForm!: FormGroup;

  constructor(
    private router:Router,
    public navCtrl:NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private sanitizer:DomSanitizer,
    private formBuilder:FormBuilder

    ){ 
      this.myForm = this.formBuilder.group({
        fullName: ['Doe John'],
        email: ['john2023@gmail.com'],
        phone: ['+2547000000'],
        address: [''],
        city: ['msa'],
      });
    }

  ngOnInit() {
  }


  back(){
    this.router.navigate(['/profile']);
  }

  async sendData(){
    const loader = await this.loadingCtrl.create({
      duration:2000
    });

    loader.present();
    loader.onWillDismiss().then(async l=>{
      const toast = await this.toastCtrl.create({
        buttons: [
          {
            side:'end',
            text:'OK',
            role:'cancel'
          }
      ],
        cssClass:'',
        message: 'Your Data was Edited!',
        duration:4000,
        position:'bottom',
      });
      toast.present();
      this.navCtrl.navigateForward('/profile');
    })

    const formData = this.myForm.value;
    // Handle the form data as needed
    console.log(formData);
  }

  async handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      const image = await this.readAsDataUrl(file);
      this.imageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image);
    }
  }

  async readAsDataUrl(file: File): Promise<string> {
    const reader = new FileReader();

    return new Promise<string>((resolve, reject) => {
      reader.onloadend = () => {
        resolve(reader.result as string);
      };

      reader.onerror = (e) => {
        reject(e);
      };

      reader.readAsDataURL(file);
    });
  }


  



}
