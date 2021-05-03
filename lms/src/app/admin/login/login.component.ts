import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  property: any;
  redirectUrl: any;

  constructor(private apiAdminService : AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    "username" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "password" : new FormControl("",[Validators.required, Validators.nullValidator])
  })

  login()
  {
    console.log(this.form.value)
    this.apiAdminService.adminLogin(this.form.value).subscribe(
      arg => {
        this.property = arg
        localStorage.setItem('accessToken', this.property.accessToken);
        localStorage.setItem('userId', this.property.id);
        localStorage.setItem('username', this.property.username);  
        localStorage.setItem('role', this.property.roles[0]);

        const redirect = this.redirectUrl ? this.redirectUrl : 'admin/dashboard';

        let role = localStorage.getItem('role');  
        if(role == 'ROLE_ADMIN') 
        {
          this.router.navigate([redirect]);
        }
        
      }
    );
    
  }
  

}
