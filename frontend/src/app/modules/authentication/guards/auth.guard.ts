import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from 'src/Services/Token/token.service';
import { inject } from '@angular/core';
import { map } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);
  // tokenService.isAuthentication.subscribe({
  //   next: (value) => {
  //     if (value==2) {
  //       router.navigate(['admin']);
  //     }
  //   },
  // });

//
//  tokenService.getRole().pipe(
//   map(value => {
//     if(parseInt(value.role) == 2){
//       router.navigate(['/admin'])
//     }
//   }));

tokenService.getRole().subscribe({
  next: (value) => {
    if(parseInt(value.role) == 2){
             router.navigate(['/admin'])
      }else
      if(parseInt(value.role) == 1){
        router.navigate(['/employee'])
      
 }
//  else{
//   router.navigate(['/login'])
//   }
  },
});


return true;

};
