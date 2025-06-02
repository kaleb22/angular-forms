import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of, Subject, switchMap } from 'rxjs';

import { dataWrapper, loginData } from './login.interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);
  private readonly API = 'http://localhost:3001';

  private loginSubject = new Subject<loginData>();
  private loginSubject$ = this.loginSubject.asObservable();

  triggerLogin(data: loginData) {
    this.loginSubject.next(data);
  }

  login$ = this.loginSubject$.pipe(
    switchMap((data) =>
      this.httpClient.post<dataWrapper>(`${this.API}/login`, data).pipe(
        catchError((err: HttpErrorResponse) => {
          console.error('error on login: ', err);
          return of({
            data: null,
            error: {
              code: err.status,
              message: err.message,
            },
          } as dataWrapper);
        }),
      ),
    ),
  );
}
