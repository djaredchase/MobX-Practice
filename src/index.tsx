import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Phone, phones } from './data/phones';
import { makeObservable, observable, action, computed } from 'mobx';

class PhoneStore {
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
    if (this.wishlist.includes(phone)) {
      alert('This phone is already in your wishlist!');
    } else {
      this.wishlist.push(phone);
    }
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

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
