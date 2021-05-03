import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-add-materials',
  templateUrl: './add-materials.component.html',
  styleUrls: ['./add-materials.component.css']
})
export class AddMaterialsComponent implements OnInit {
  constructor(private apiAdminService : AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  myForm = new FormGroup({
    "name" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "category" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "qty" : new FormControl("",[Validators.required, Validators.nullValidator]),
    "author" : new FormControl("",[Validators.required, Validators.nullValidator])
  })

  saveData()
  {
    console.log(this.myForm.value)
    
    this.apiAdminService.addmaterials(this.myForm.value).subscribe(
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
