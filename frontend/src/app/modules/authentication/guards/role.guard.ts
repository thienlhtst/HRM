import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { TokenService } from 'src/Services/Token/token.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';


export const roleGuard: CanActivateFn = (route, state) => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    return tokenService.getRole().pipe(
        map(value => {
          console.log(value)
          if(parseInt(value.role) == 0)
            router.navigate(['/login'])
          if(parseInt(value.role) == 1)
            router.navigate(['/profile'])
          if(parseInt(value.role) == 2){
            router.navigate(['/admin'])
            return true;
          }
          return false;
        })
    );
};

