import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginbtn:boolean;
  logoutbtn:boolean;
  constructor(private dataService: ApiService, private router:Router)
  {
    if(this.dataService.isLoggedIn())
    {
      console.log("loggedin");
      this.loginbtn=false;
      this.logoutbtn=true
    }
    else{
      console.log("loggout");
      this.loginbtn=true;
      this.logoutbtn=false
    }
    //window.location.href = window.location.href;
  }

  ngOnInit() {    
    if (this.dataService.subsVar==undefined) {    
      this.dataService.subsVar = this.dataService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.firstFunction();    
      });    
    }    
  } 
  
  logout()
  {
    this.dataService.deleteToken();
    //window.location.href = window.location.href;
    setTimeout(()=>{
      this.firstFunction();
    }, 1000)
    
  }
  

  firstFunction() {    
    this.router.navigate(['home/login']);
  }

}
