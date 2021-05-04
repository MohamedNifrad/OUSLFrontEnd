import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-associate-materials',
  templateUrl: './associate-materials.component.html',
  styleUrls: ['./associate-materials.component.css']
})
export class AssociateMaterialsComponent implements OnInit {
  users: any;
  materials: any;

  constructor(private apiAdminService : AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers()
    this.getMaterials()

  }

  myForm = new FormGroup({
    "user" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "materials" : new FormControl("",[Validators.required, Validators.nullValidator])
  })


  getUsers()
  {
    this.apiAdminService.getUsers().subscribe(
      response => this.users = response

    )
  }

  getMaterials()
  {
    this.apiAdminService.getMaterials().subscribe(
      response => this.materials = response
    )
  }


  saveData()
  {
    console.log(this.myForm.value);

    let abc={
      "user":{
        "id":this.myForm.get('user').value
    },
    "materials":{
        "id":this.myForm.get('materials').value
    }
    }

    console.log(abc)
    
    this.apiAdminService.addUserMaterials(abc).subscribe(
      response =>
      {
        alert('success')
      },
      error =>
      {
        alert('error')
      }
    )
  }



}
