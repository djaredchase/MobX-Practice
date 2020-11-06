import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../index';
import './store.css';
import { Phone } from '../data/phones';
import { MyButton } from '../stories/myButton';
import { Card } from '../stories/Card';

export const Store: React.FC = observer(() => {
    const store = useContext(StoreContext);

    const addFunds = () => {
        let amount = prompt("Enter amount in dollars below");
        let numAmount = parseInt(amount || '0');
        if (Number.isInteger(numAmount)) {
            store.addFunds(numAmount);
        } else {
            alert("Please enter a number");
        }
    }

    const checkout = () => {
        if (store.funds < store.cartTotal) {
            alert('Insufficient funds.');
        } else {
            store.checkout();
            store.shoppingCart = [];
            alert('Purchase successful.');
        }
    }

    return (
        <div>
            <h2>Store</h2>
            <h4>Balance: ${store.funds}</h4>
            <MyButton primary={true} onClick={addFunds}>Add funds</MyButton>
            <MyButton primary={true} onClick={checkout}>Checkout</MyButton>
            <hr />
            <br />
            <div className='store-container'>
                {store.smartPhones.map(phone =>
                    <Card key={Math.random()} main={true}>
                        <ul>
                            <li>Make: {phone.make}</li>
                            <li>Model: {phone.model}</li>
                            <li>Screen size: {phone.screenSizeInches} inches</li>
                            <li>Storage: {phone.storageGB}gb</li>
                            <li>RAM: {phone.ramGB}gb</li>
                            <li>Price: ${phone.priceInDollars}</li>
                            <MyButton primary={true} onClick={() => store.addToWishlist(phone)}>Add to wishlist</MyButton>
                            <MyButton primary={true} onClick={() => store.addToShoppingCart(phone)}>Add to cart</MyButton>
                        </ul>
                    </Card>)}
            </div>
        </div>
    )
})