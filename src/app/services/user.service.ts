import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/interfaces/user.inteface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string = "http://localhost:8080/user"

  constructor(private httpClient: HttpClient) { }

  public listMany(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl + "/getAll");
  }

  updateOne(userId: string, name: string): Observable<User> {
    const token = sessionStorage.getItem('auth-token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    const updatedData = { name };

    return this.httpClient.put<User>(`${this.apiUrl}/update/${userId}`, updatedData , { headers });
  }

  public deleteOne(userId: string): Observable<void> {
    const token = sessionStorage.getItem('auth-token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.delete<void>(`${this.apiUrl}/delete/${userId}`, { headers });
  }
}