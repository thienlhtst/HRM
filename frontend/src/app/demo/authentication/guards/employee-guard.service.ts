import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from 'src/Services/Token/token.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const employeeGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  tokenService.isAuthentication.subscribe({
    next: (value) => {
      if (value == 1) {
        router.navigate(['/guest']);
      }
    },
  });

  return true;
};
