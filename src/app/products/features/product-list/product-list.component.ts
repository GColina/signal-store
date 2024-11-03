import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';
import { ProductStateService } from '../../data-access/products-state.service';
import { ProductsCardComponent } from '../../ui/products-card/products-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductsCardComponent],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductStateService]
})
export default class ProductListComponent {
 productsState = inject(ProductStateService);


}
