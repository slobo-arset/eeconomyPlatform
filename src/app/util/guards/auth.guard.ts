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
    /*return this.auth$.isAuthenticated().pipe(
      switchMap((val: boolean) => {
        val = false;
        if (!val) {
          this.router.navigate(['login']);
          return of(val)
        }
        return of(val)
      })
    )*/
      this.router.navigate(['login']);
      return of(false)
  }

}


