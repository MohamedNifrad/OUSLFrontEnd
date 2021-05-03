import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  private lUrl:string = "http://localhost:8080"

  constructor(private http: HttpClient, private router:Router) { }

  adminLogin(form)
  {
    const url = this.lUrl + '/api/auth/signin'
    return this.http.post(url, form)
  }

  getUsers(): Observable<any>{
    const url = this.lUrl + '/api/user/get'
    return this.http.get(url)
  }

  getMaterials(): Observable<any>{
    const url = this.lUrl + '/api/materials/get'
    return this.http.get(url)
  }

  addmaterials(myFrom)
  {
    const url = this.lUrl + '/api/materials/save'
    return this.http.post(url, myFrom)
  }

  addUserMaterials(myForm)
  {
    const url = this.lUrl + '/api/user-materials/save'
    return this.http.post(url, myForm)
  }

  deleteToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
  }

  getMaterialsCountAvailableService(materialId): Observable<any>{
    const url = this.lUrl + '/api/materials/get-materials-available/'+materialId;
    return this.http.get(url)
  }
}
