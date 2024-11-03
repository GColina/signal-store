import { Component, input } from '@angular/core';
import { Product } from '../../../shared/interfaces/products.interface';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [],
  templateUrl: './products-card.component.html',
  styles: ``
})
export class ProductsCardComponent {
  product = input.required<Product>();
}
