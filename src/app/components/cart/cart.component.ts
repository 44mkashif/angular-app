import { Component, OnInit } from '@angular/core';
import { ICart, ICartItem } from 'src/app/interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: ICart = {
    items: [
      {
        product: 'https://via.placeholder.com/150',
        name: 'Snickers',
        price: 150,
        quantity: 2,
        id: 1,
      },
      {
        product: 'https://via.placeholder.com/150',
        name: 'Slides',
        price: 50,
        quantity: 3,
        id: 3,
      },
    ],
  };
  dataSource: ICartItem[] = [];
  displayCols: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(): number {
    return this.cart.items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current + 0);
  }
}
