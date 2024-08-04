  import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from 'src/Services/Token/token.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const guestGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  // tokenService.isAuthentication.subscribe({
  //   next: (value) => {
  //     console.log(value)
  //     if(value == 0){
  //       router.navigate(['/login'])
  //     }
  //   },
  // });
  tokenService.getRole().subscribe({
    next: (value) => {
      if(parseInt(value.role) == 0 || parseInt(value.role) == 1){
        router.navigate(['/login'])
      }
    },
  });
  // tokenService.getRole().pipe(
  //   map(value => {
  //     console.log(value)
  //     if(parseInt(value.role) == 0){
  //       router.navigate(['/login'])
  //     }
  //   }));
  return true;
};
