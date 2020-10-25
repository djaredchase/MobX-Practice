import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../index';
import './store.css';

export const Store: React.FC = observer(() => {
    const store = useContext(StoreContext);

    //TODO move these functions that change obervable arrays to the MobX store and make them actions
    const addToWishlist = (model: string) => {
        const phone = store.smartPhones.find(p => p.model == model) || store.wishlist[0];
        if(store.wishlist.includes(phone)) {
            console.log('already there');
            alert('This phone is already in your wishlist!');
        }else {
            store.wishlist.push(phone);
            console.log('adding to list');
        }
    }

    const addToShoppingCart = (model: string) => {
        const phone = store.smartPhones.find(p => p.model == model) || store.shoppingCart[0];
        if(store.shoppingCart.includes(phone)) {
            alert('You can only buy one of each phone at a time!');
        }
        store.shoppingCart.push(phone);
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
                            <button onClick={() => addToWishlist(phone.model)} >Add to wishlist</button>
                            <button onClick={() => addToShoppingCart(phone.model)}>Add to cart</button>
                        </ul>
                    </div>)}
            </div>
        </div>
    )
})