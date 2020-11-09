import React from 'react';
import { shallow } from 'enzyme';
import { PhoneStore } from '../App';

describe('Phone Store', () => {
    it('adds phones to the wishlist', () => {
        const store = new PhoneStore;
        const phone1 = {
            id: 1,
            make: 'Apple',
            model: 'iPhone 11 Pro',
            screenSizeInches: 5.4,
            storageGB: 64,
            ramGB: 4,
            priceInDollars: 1000
        };
        const phone2 = {
            id: 2,
            make: 'Google',
            model: 'Pixel 4',
            screenSizeInches: 5.5,
            storageGB: 128,
            ramGB: 6,
            priceInDollars: 900
        };
        store.addToWishlist(phone1);
        store.addToWishlist(phone2);
        expect(store.wishlist.length).toBe(2);
        expect(store.wishlist[0].model).toBe('iPhone 11 Pro');
        expect(store.wishlist[1].model).toBe('Pixel 4');
    });

    it('adds phones to the shopping cart', () => {
        const store = new PhoneStore;
        const phone1 = {
            id: 1,
            make: 'Apple',
            model: 'iPhone 11 Pro',
            screenSizeInches: 5.4,
            storageGB: 64,
            ramGB: 4,
            priceInDollars: 1000
        };
        const phone2 = {
            id: 2,
            make: 'Google',
            model: 'Pixel 4',
            screenSizeInches: 5.5,
            storageGB: 128,
            ramGB: 6,
            priceInDollars: 900
        };
        store.addToShoppingCart(phone1);
        store.addToShoppingCart(phone2);
        expect(store.shoppingCart.length).toBe(2);
        expect(store.shoppingCart[0].model).toBe('iPhone 11 Pro');
        expect(store.shoppingCart[1].model).toBe('Pixel 4');
    });

    it('adds funds', () => {
        const store = new PhoneStore;
        store.addFunds(50);
        expect(store.funds).toBe(50);
    });

    it('removes from wishlist', () => {
        const store = new PhoneStore;
        const phone1 = {
            id: 1,
            make: 'Apple',
            model: 'iPhone 11 Pro',
            screenSizeInches: 5.4,
            storageGB: 64,
            ramGB: 4,
            priceInDollars: 1000
        };
        const phone2 = {
            id: 2,
            make: 'Google',
            model: 'Pixel 4',
            screenSizeInches: 5.5,
            storageGB: 128,
            ramGB: 6,
            priceInDollars: 900
        };
        store.wishlist = [phone1, phone2];
        store.removeFromWishlist(phone2);
        expect(store.wishlist.length).toBe(1);
        expect(store.wishlist[1]).toBe(undefined);
    });

    it('removes from shopping cart', () => {
        const store = new PhoneStore;
        const phone1 = {
            id: 1,
            make: 'Apple',
            model: 'iPhone 11 Pro',
            screenSizeInches: 5.4,
            storageGB: 64,
            ramGB: 4,
            priceInDollars: 1000
        };
        const phone2 = {
            id: 2,
            make: 'Google',
            model: 'Pixel 4',
            screenSizeInches: 5.5,
            storageGB: 128,
            ramGB: 6,
            priceInDollars: 900
        };
        store.shoppingCart = [phone1, phone2];
        store.removeFromShoppingCart(phone2);
        expect(store.shoppingCart.length).toBe(1);
        expect(store.shoppingCart[1]).toBe(undefined);
    });

    it('subtracts the cart total from the funds', () => {
        const store = new PhoneStore;
        const phone1 = {
            id: 1,
            make: 'Apple',
            model: 'iPhone 11 Pro',
            screenSizeInches: 5.4,
            storageGB: 64,
            ramGB: 4,
            priceInDollars: 1000
        };
        const phone2 = {
            id: 2,
            make: 'Google',
            model: 'Pixel 4',
            screenSizeInches: 5.5,
            storageGB: 128,
            ramGB: 6,
            priceInDollars: 900
        };
        store.shoppingCart = [phone1, phone2];
        store.funds = 2000;
        store.checkout();
        expect(store.funds).toBe(100);
    })
})