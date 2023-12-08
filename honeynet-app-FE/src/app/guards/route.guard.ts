import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {inject} from "@angular/core";
import {catchError, map} from "rxjs";

export const RouteGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.checkIsAuthenticated().pipe(
    map((response) => {
      if(response.data){
        return true;
      }
      else {
        return router.parseUrl('/')
      }
    }),
    catchError(async () => router.parseUrl('/'))
  )
}
