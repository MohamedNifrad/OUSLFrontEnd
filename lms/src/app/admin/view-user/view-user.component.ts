import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users
  constructor(private apiAdminService : AdminServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData()
  {
    this.apiAdminService.getUsers().subscribe(
      response => 
      {
        this.users = response
        console.log(this.users)
      }
    )
  }

}
