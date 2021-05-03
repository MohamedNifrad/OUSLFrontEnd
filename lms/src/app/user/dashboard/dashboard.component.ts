import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Type } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  materials: any;

  constructor(private apiService: ApiService) { 
     
    this.headers();

    this.getData()
    
  }

  username
  ngOnInit(): void {

    this.username = localStorage.getItem('username');   
    
  }
 
  

  public headers()
  {
    let token = this.apiService.getToken();
    let tokenStr = 'Bearer '+token;
    console.log(tokenStr);
   
   let headers = new HttpHeaders().set("Authorization",tokenStr);

   let userId = localStorage.getItem('userId');   
  }


  getData()
  {
    let token = this.apiService.getToken();
    let tokenStr = 'Bearer '+token;
    console.log(tokenStr);
   
    let headers = new HttpHeaders().set("Authorization",tokenStr);

    let userId = localStorage.getItem('userId');   
    this.apiService.getMaterialsService(headers, userId).subscribe(
      response => {
        this.materials = response;
        console.log(this.materials)

      },
      Error => {
        console.log(Error)
        alert("error");
      }
    )
  }

  

}
