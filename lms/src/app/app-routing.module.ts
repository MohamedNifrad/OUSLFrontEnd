import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home/login', pathMatch: 'full' },
  { path: 'home', loadChildren:()=>import('./user/user.module').then(e=>e.UserModule) },
  { path: 'admin', loadChildren:()=>import('./admin/admin.module').then(e=>e.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
