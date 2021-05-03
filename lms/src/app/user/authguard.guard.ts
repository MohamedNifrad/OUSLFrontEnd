import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate{
    constructor(private apiService: ApiService,private router: Router ) {}

    canActivate(): boolean {
      if (!this.apiService.isLoggedIn()) {
        console.log('bfr log')
        this.router.navigate(['home/login']);
        return false;
      }
      else
      {
        console.log('after log')
        return true;
      }
      
    }
    
}
