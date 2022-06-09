import { Component } from '@angular/core';

interface Product {
  id?: string;
  code?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: string;
  category?: string;
  image?: string;
  rating?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  title = 'prime-ng-demo';

  constructor() {
    this.products = [
      {
        id: "1",
        code: "abc",
        name: "Foo",
        description: "Foobar",
        price: 2,
        quantity: 3,
        inventoryStatus: "status 1",
        category: "Cat 1",
        image: "path",
        rating: 4
      }
    ];
  }
}
