import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CamaService {
 
  private baseUrl = 'http://localhost:8000/camas';
 
  constructor(private http: HttpClient) { }
 
  getCama(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
 
  createCama(cama: Object): Observable<object> {
    return this.http.post(`${this.baseUrl}/`, cama);
  } 
 
  updateCama(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteCama(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
 
  getCamasList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/`);
  }
 
  getCamasByCodigo(codigo: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/codigo/${codigo}/`);
  }
 
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/`);
  }
}