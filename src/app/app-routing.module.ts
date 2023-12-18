import { LandingPageModule } from './landing-page/landing-page.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:() => import('./landing-page/landing-page.module').then(m =>m.LandingPageModule)},
  {path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
