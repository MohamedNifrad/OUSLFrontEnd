import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/user/services/api.service';
import { AdminServiceService } from '../services/admin-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private apiAdminService : AdminServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    this.apiAdminService.deleteToken()
    setTimeout(()=>{
      this.firstFunction();
    }, 1000)
    
  }
  

  firstFunction() {    
    this.router.navigate(['admin/login']);
  }
  

}
