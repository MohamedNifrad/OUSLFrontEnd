import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiService : ApiService, private router: Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    "email" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "password" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "username" : new FormControl("",[Validators.required, Validators.nullValidator])
  })

  register()
  {
    console.log(this.form.value)
    this.apiService.addUser(this.form.value)
  }

  loginrouter()
  {
    this.router.navigate(['home/login']);
  }

}
