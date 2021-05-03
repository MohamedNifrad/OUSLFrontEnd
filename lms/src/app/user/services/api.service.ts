import { EventEmitter, Injectable, Output } from '@angular/core';
import { User} from '../model/user';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subscribable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  invokeFirstComponentFunction = new EventEmitter();    
  subsVar: Subscription;""


  private url: string =  "http://localhost:8080/api/auth/signup";
  private url2: string =  "http://localhost:8080/api/auth/signin";
  private url3: string =  "http://localhost:8080/home/";


  private lUrl:string = "http://localhost:8080"
  UserToken: any;
  redirectUrl: string;
  
  constructor(private http: HttpClient, private router:Router) { }

  onFirstComponentButtonClick() {    
    this.invokeFirstComponentFunction.emit();    
  }


  public addUser(user: User): void {
    this.http.post(this.url, user).subscribe(
      Response => {
        console.log(Response);
        alert("successfully added");

      },
      Error => {
        console.log(Error)
        alert("error");
      }

    )
  }
  public login(login: Login): void {
    this.http.post(this.url2, login).subscribe(
      response => {
        this.UserToken = response;
        console.log(this.UserToken);
        this.setToken(this.UserToken.accessToken);
        console.log(this.getToken());
        localStorage.setItem('userId', this.UserToken.id);
        localStorage.setItem('username', this.UserToken.username);
        
        localStorage.setItem('role', this.UserToken.roles[0]);

        const redirect = this.redirectUrl ? this.redirectUrl : 'home/dashboard';
        this.router.navigate([redirect]);

        //window.location.reload();
        // localStorage.setItem('tokenType', this.UserToken.tokenType);
        // let tokenType = localStorage.getItem('tokenType');
        // console.log(tokenType);

      },
      Error => {
        console.log(Error)
        alert("Error");
      }
    )
  }

  
  welcome(userId, headers): Subscribable<any> {
    return this.http.get(this.url3,{headers, responseType: 'text' as 'json'});
  }
  

   //token
  setToken(accessToken: string) {
      localStorage.setItem('accessToken', accessToken);
      
    }

  getToken() {
      let accessToken = localStorage.getItem('accessToken');
      return accessToken;
    }

  deleteToken() {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('role');
      localStorage.removeItem('username');
    }

  isLoggedIn() {
      const usertoken = this.getToken();
      console.log(usertoken);
      if (usertoken != null) 
      {
        console.log("has value");
        return true
      }
      else
      {
        console.log("not value");
        return false;
      }
    }

  getMaterialsService(headers, userId): Observable<any>{
    const url = this.lUrl + '/api/materials/get-materials/'+userId;
    return this.http.get(url,{headers})
  }
}
