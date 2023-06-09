import { Component, OnInit } from '@angular/core';
import { ICart, ICartItem } from 'src/app/interfaces/cart.interface';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.dataSource = this.cart.items;
    this.cartService.cart.subscribe((_cart: ICart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    });
  }

  getTotal(): number {
    return this.cartService.getTotal(this.cart.items);
  }

  onClearCart(): void {
    return this.cartService.clearCart();
  }

  onRemoveFromCart(cartItem: ICartItem): void {
    this.cartService.removeFromCart(cartItem);
  }

  onIncreaseQuantity(cartItem: ICartItem): void {
    this.cartService.addToCart(cartItem);
  }

  OnDecreaseQuantity(cartItem: ICartItem): void {
    this.cartService.decreaseQuantity(cartItem);
  }
}
