import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get('http://localhost:8000/api/users/all');
  }
  getUser(name: string) {
    return this.http.get('http://localhost:8000/api/users/getById/' + name);
  }
}
