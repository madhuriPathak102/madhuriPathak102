import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartAddedSubject: any;
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts'
    );
  }
  addToCart(obj: any) {
    return this.http.post<any>(
      'http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart',
      obj
    );
  }
}
