import React, { useContext } from 'react';
import { StoreContext } from '../index';
import './store.css';

export const Store: React.FC = () => {
    const store = useContext(StoreContext);

    return (
        <div>
            <h2>Store Component</h2>
            <main>
                <div className='phone-container'>
                    {store.smartPhones.map(phone =>
                        <div key={phone.model} className='phone-card'>
                            <ul>
                                <li>Make: {phone.make}</li>
                                <li>Model: {phone.model}</li>
                                <li>Screen size: {phone.screenSizeInches} inches</li>
                                <li>Storage: {phone.storageGB}gb</li>
                                <li>RAM: {phone.ramGB}gb</li>
                                <li>Price: ${phone.priceInDollars}</li>
                            </ul>
                        </div>)}
                </div>
            </main>
        </div>
    )
}