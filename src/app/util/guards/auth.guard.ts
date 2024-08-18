import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../data-access/auth/auth.service";
import {of} from "rxjs";
import {switchMap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(private auth$: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('accessToken');
      if (token) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }

}


