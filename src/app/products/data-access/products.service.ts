import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http.service';
import { Observable } from 'rxjs';
import { Product } from '../../shared/interfaces/products.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseHttpService {
  getProducts():Observable<Product[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }
}
