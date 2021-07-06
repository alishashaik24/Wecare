import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HospitalService } from './services/hospital.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalGuardGuard implements CanActivate {
  constructor(private service: HospitalService, private _router: Router) { }

  canActivate():boolean{
    if (this.service.HospitalloggedIn()) {
      return true
    }
    else {
      this._router.navigate(['/department-login'])
      return false
    }
  }

}
