import { Injectable } from '@angular/core';
import { Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) { }

  get contracts$() {
    return this.http.get(`http://localhost:3000/contract/`)
      .pipe(catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }));
  }

  get persons$() {
    return this.http.get(`http://localhost:3000/person/`)
      .pipe(catchError(error => {
        this.loadingError$.next(error.statusText);
        return of(null);
      }));
  }
}
