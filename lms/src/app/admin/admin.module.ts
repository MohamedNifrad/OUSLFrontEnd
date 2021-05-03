import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminServiceService } from './services/admin-service.service';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { AddMaterialsComponent } from './add-materials/add-materials.component';
import { AssociateMaterialsComponent } from './associate-materials/associate-materials.component'

const routes: Routes = [
  {
    path:  '',
    component:  NavbarComponent,
      children: [
      {
        path:  'dashboard',
        component:  DashboardComponent
      },
      {
        path:  'view-user',
        component:  ViewUserComponent
      },
      {
        path:  'add-materials',
        component:  AddMaterialsComponent
      },
      {
        path:  'associate-materials',
        component:  AssociateMaterialsComponent
      }
    ]
  },
  {
    path:  'login',
    component:  LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent, NavbarComponent, DashboardComponent, ViewUserComponent, AssociateMaterialsComponent,AddMaterialsComponent],
  imports: [
    [RouterModule.forChild(routes)],
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminServiceService]
})
export class AdminModule { }
