import { LandingPageModule } from './landing-page/landing-page.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',loadChildren:() => import('./landing-page/landing-page.module').then(m =>m.LandingPageModule)},
  {path: '',loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  {
    path: 'profile',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
