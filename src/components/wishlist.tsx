import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '..';
import './side.panel.css';

export const WishList: React.FC = observer(() => {
    const store = useContext(StoreContext);

    return (
        <div>
            <h2>Wishlist Component</h2>
            <div className='side-container'>
                {store.wishlist.map(phone =>
                    <div key={phone.model} className='side-card'>
                        <ul>
                            <li>Make: {phone.make}</li>
                            <li>Model: {phone.model}</li>
                            <li>Screen size: {phone.screenSizeInches} inches</li>
                            <li>Storage: {phone.storageGB}gb</li>
                            <li>RAM: {phone.ramGB}gb</li>
                            <li>Price: ${phone.priceInDollars}</li>
                            <button onClick={() => store.removeFromWishlist(phone)}>Remove</button>
                        </ul>
                    </div>)}
            </div>
        </div>
    )
})