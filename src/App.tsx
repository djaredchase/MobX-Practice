import React, { createContext } from 'react';
import './App.css';
import { Phone, phones } from './data/phones';
import { makeObservable, observable, action, computed } from 'mobx';
import { ShoppingCart } from './components/shopping.cart';
import { Store } from './components/store';
import { WishList } from './components/wishlist';

export class PhoneStore {
  smartPhones: Phone[] = phones
  //wishlist array really should not allow duplicates
  wishlist: Phone[] = []
  shoppingCart: Phone[] = []
  funds = 0
  get cartTotal() {
    let total = 0;
    this.shoppingCart.forEach(phone => total += phone.priceInDollars);
    return total;
  }

  constructor() {
    makeObservable(this, {
      wishlist: observable,
      shoppingCart: observable,
      funds: observable,
      addToWishlist: action,
      addToShoppingCart: action,
      addFunds: action,
      removeFromWishlist: action,
      removeFromShoppingCart: action,
      checkout: action,
      cartTotal: computed
    })
  }

  addToWishlist(phone: Phone) {
    this.wishlist.push(phone);
  }

  addToShoppingCart(phone: Phone) {
    this.shoppingCart.push(phone);
  }

  addFunds(amount: number) {
    this.funds += amount;
  }

  removeFromWishlist(phone: Phone) {
    const index = this.wishlist.indexOf(phone);
    this.wishlist.splice(index, 1);
  }

  removeFromShoppingCart(phone: Phone) {
    const index = this.shoppingCart.indexOf(phone);
    this.shoppingCart.splice(index, 1);
  }

  checkout() {
    this.funds -= this.cartTotal;
  }
}

const store = new PhoneStore();
export const StoreContext = createContext<PhoneStore>(store);

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="App">
        <div className='wishlist'>
          <WishList />
        </div>
        <div className='store'>
          <Store />
        </div>
        <div className='shopping-cart'>
          <ShoppingCart />
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
