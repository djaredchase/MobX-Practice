import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import './side.panel.css'
import { StoreContext } from '../App';
import { MyButton } from '../stories/myButton';
import { Card } from '../stories/Card';

export const ShoppingCart: React.FC = observer(() => {
    const store = useContext(StoreContext);

    return (
        <div>
            <h2>Shopping cart</h2>
            <h4>Cart total: ${store.cartTotal}</h4>
            <div className='side-container'>
                {store.shoppingCart.map(phone =>
                    <Card main={false} key={Math.random()}>
                        <ul>
                            <li>Make: {phone.make}</li>
                            <li>Model: {phone.model}</li>
                            <li>Screen size: {phone.screenSizeInches} inches</li>
                            <li>Storage: {phone.storageGB}gb</li>
                            <li>RAM: {phone.ramGB}gb</li>
                            <li>Price: ${phone.priceInDollars}</li>
                            {/* <button onClick={() => store.removeFromShoppingCart(phone)}>Remove</button> */}
                            <MyButton primary={false} onClick={() => store.removeFromShoppingCart(phone)}>Remove</MyButton>
                        </ul>
                    </Card>)}
            </div>
        </div>
    )
})