import React from 'react';
import './App.css';
import { ShoppingCart } from './components/shopping.cart';
import { Store } from './components/store';
import { WishList } from './components/wishlist';

function App() {
  return (
    <div className="App">
      <div className='wishlist'>
        <WishList/>
      </div>
      <div className='store'>
        <Store/>
      </div>
      <div className='shopping-cart'>
        <ShoppingCart/>
      </div>
    </div>
  );
}

export default App;
