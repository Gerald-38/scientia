// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class BasicAuthInterceptorService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      const userToken = sessionStorage.getItem('token');
      req = req.clone({
        setHeaders: {
          Authorization: `${userToken}`
          // Authorization: sessionStorage.getItem('token')
        }
      })
    }

    return next.handle(req);

  }
}
