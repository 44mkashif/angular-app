import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICart, ICartItem } from '../interfaces/cart.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = new BehaviorSubject<ICart>({ items: [] });

  constructor(private _snackBar: MatSnackBar) {}

  addToCart(item: ICartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => item.id === _item.id);
    if (itemInCart) {
      itemInCart.quantity += 1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('Item added to cart.', 'Ok', { duration: 3000 });
  }

  getTotal(items: ICartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is cleared', 'Ok', { duration: 3000 });
  }

  removeFromCart(cartItem: ICartItem, notifyUser = true): ICartItem[] {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== cartItem.id
    );
    if (notifyUser) {
      this.cart.next({ items: filteredItems });
      this._snackBar.open('Item is removed from the cart', 'Ok', {
        duration: 3000,
      });
    }
    return filteredItems;
  }

  decreaseQuantity(cartItem: ICartItem): void {
    let itemForRemoval: ICartItem | undefined;
    let updatedItems = this.cart.value.items.map((_item) => {
      if (_item.id === cartItem.id) {
        _item.quantity -= 1;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    });

    if (itemForRemoval) {
      updatedItems = this.removeFromCart(itemForRemoval, false);
    }
    this.cart.next({ items: updatedItems });
  }
}
