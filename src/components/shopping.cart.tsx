import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import './side.panel.css'
import { StoreContext } from '..';

export const ShoppingCart: React.FC = observer(() => {
    const store = useContext(StoreContext);

    return (
        <div>
            <h2>Shopping cart component</h2>
            <div className='side-container'>
                {store.shoppingCart.map(phone =>
                    <div key={phone.model} className='side-card'>
                        <ul>
                            <li>Make: {phone.make}</li>
                            <li>Model: {phone.model}</li>
                            <li>Screen size: {phone.screenSizeInches} inches</li>
                            <li>Storage: {phone.storageGB}gb</li>
                            <li>RAM: {phone.ramGB}gb</li>
                            <li>Price: ${phone.priceInDollars}</li>
                            <button onClick={() => store.removeFromShoppingCart(phone)}>Remove</button>
                        </ul>
                    </div>)}
            </div>
        </div>
    )
})