import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService : ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    "username" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "password" : new FormControl("",[Validators.required, Validators.nullValidator])
  })
  login()
  {
    console.log(this.form.value)
    this.apiService.login(this.form.value)
    
  }

  register()
  {
    this.router.navigate(['home/registration']);
  }
  
  

}
