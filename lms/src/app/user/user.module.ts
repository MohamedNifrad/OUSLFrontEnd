import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ApiService } from './services/api.service';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthguardGuard } from './authguard.guard';
import { from } from 'rxjs';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';

const routes: Routes = [
  {
    path:  '',
    component:  NavbarComponent,
      children: [
      {
        path:  'dashboard',
        component:  DashboardComponent
      }
    ]
  },
  {
    path:  'login',
    component:  LoginComponent
  },
  {
    path:  'registration',
    component:  RegistrationComponent
  }
];

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, DashboardComponent, NavbarComponent, FooterComponent],
  imports: [
      [RouterModule.forChild(routes)],
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],

  providers: [ApiService]
})
export class UserModule { }
