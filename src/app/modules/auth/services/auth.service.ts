import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseBase } from 'src/app/schemas/base/ResponseBase.interface';
import { TokenResponse } from 'src/app/schemas/user/tokenResponse.interface';
import getDecodedToken from 'src/app/utils/getTokenData';
import { environment } from 'src/environments/environment';
import { Credentials } from '../../../schemas/user/credentials.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { 
  }

  getToken(): string{
    return localStorage.getItem('_secret') as string;
  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['./auth/signIn']);
  }

  verifyAuthentication(): boolean {
    if (!localStorage.getItem('_secret')) {
      return false;
    } 
    return true;
  }

  getUser(): any {
    return getDecodedToken();
  }

  signIn(user: Credentials)
  {
    console.log(user);
    return this.http.post<ResponseBase<TokenResponse>>(`${environment.urlBase}api/auth/login`, user)
      .pipe(
        tap( res => { if (res.code == 0) {
          localStorage.setItem('_secret',res.objeto?.accessToken);
        }
      })
    );
  }

}
