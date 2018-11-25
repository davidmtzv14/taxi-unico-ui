import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { Viaje } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  query_historial(username: string): Observable<Viaje> {
    let url = 'http://10.23.22.91:5000/getViajesFromCliente';
    url += '?' + 'username=' + username;

    return this.http.get<Viaje>(url);
  }
}
