  import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from 'src/Services/Token/token.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const guestGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  tokenService.isAuthentication.subscribe({
    next: (value) => {
      console.log(value)
      if(value == 0){
        router.navigate(['/login'])
      }
      if(value == 1){
        router.navigate(['/profile'])
      }
      if(value == 2){
        router.navigate(['/profile'])
      }
    },
  });

  return true;
};
