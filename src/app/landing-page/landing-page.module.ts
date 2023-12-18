import { LandingPageComponent } from "./landing-page.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

@NgModule({
    imports:[
        IonicModule,
        CommonModule,
        RouterModule.forChild([
            {path:'',component:LandingPageComponent}
        ])
    ],
    declarations:[LandingPageComponent]
})

export class LandingPageModule{}