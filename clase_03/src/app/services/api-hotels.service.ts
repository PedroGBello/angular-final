import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rental } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiHotelsService {
  private url = 'https://66e706f717055714e58b465b.mockapi.io/hotels/';
  constructor(private http: HttpClient) {}

  getAll(): Observable<Rental[]> {
    return this.http.get<Rental[]>(this.url);
  }
  getOne(id: string): Observable<Rental> {
    return this.http.get<Rental>(this.url + id);
  }
}
