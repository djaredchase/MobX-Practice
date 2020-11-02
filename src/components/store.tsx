import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../index';
import './store.css';
import { Phone } from '../data/phones';

export const Store: React.FC = observer(() => {
    const store = useContext(StoreContext);

    //Creating these arrays to implememnt checking for phone in a list before adding it to the list
    //"store.wishlist.includes(phone)" is returning false even after the phone has
    //been pushed to the array
    //still adding to the arrays in the MobX store as well of course though
    const wishlist = new Array();
    const cart = new Array();
    
    const addToWishlist = (phone: Phone) => {
        if (wishlist.includes(phone)) {
            alert('This phone is already in your wishlist!');
        } else {
            store.addToWishlist(phone);
            wishlist.push(phone);
        }
    }

    const addToShoppingCart = (phone: Phone) => {
        if (cart.includes(phone)) {
            alert('You can only buy one of each phone at a time!');
        } else {
            store.addToShoppingCart(phone);
            cart.push(phone);
        }
    }

    return (
        <div>
            <h2>Store Component</h2>
            <div className='store-container'>
                {store.smartPhones.map(phone =>
                    <div key={phone.model} className='store-card'>
                        <ul>
                            <li>Make: {phone.make}</li>
                            <li>Model: {phone.model}</li>
                            <li>Screen size: {phone.screenSizeInches} inches</li>
                            <li>Storage: {phone.storageGB}gb</li>
                            <li>RAM: {phone.ramGB}gb</li>
                            <li>Price: ${phone.priceInDollars}</li>
                            <button onClick={() => addToWishlist(phone)} >Add to wishlist</button>
                            <button onClick={() => addToShoppingCart(phone)}>Add to cart</button>
                        </ul>
                    </div>)}
            </div>
        </div>
    )
})