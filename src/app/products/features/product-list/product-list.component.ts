import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductStateService } from '../../data-access/products-state.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductListComponent {
 productsState = inject(ProductStateService);


}
