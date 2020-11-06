export const phones = new Array<Phone>();

const phone1: Phone = {
    id: 1,
    make: 'Apple',
    model: 'iPhone 11 Pro',
    screenSizeInches: 5.4,
    storageGB: 64,
    ramGB: 4,
    priceInDollars: 1000
}

const phone2: Phone = {
    id: 2,
    make: 'Google',
    model: 'Pixel 4',
    screenSizeInches: 5.5,
    storageGB: 128,
    ramGB: 6,
    priceInDollars: 900
}

const phone3: Phone = {
    id: 3,
    make: 'Samsung',
    model: 'Note 20',
    screenSizeInches: 7,
    storageGB: 256,
    ramGB: 8,
    priceInDollars: 1000
}

const phone4: Phone = {
    id: 4,
    make: 'Apple',
    model: 'XR',
    screenSizeInches: 6.1,
    storageGB: 64,
    ramGB: 4,
    priceInDollars: 699
}

const phone5: Phone = {
    id: 5,
    make: 'Apple',
    model: '11',
    screenSizeInches: 6.1,
    storageGB: 64,
    ramGB: 4,
    priceInDollars: 649
}

const phone6: Phone = {
    id: 6,
    make: 'Google',
    model: 'Pixel 4a',
    screenSizeInches: 6,
    storageGB: 128,
    ramGB: 6,
    priceInDollars: 350
}

const phone7: Phone = {
    id: 7,
    make: 'Samsung',
    model: 'Fold 2',
    screenSizeInches: 7.6,
    storageGB: 256,
    ramGB: 8,
    priceInDollars: 2000
}

const phone8: Phone = {
    id: 8,
    make: 'Google',
    model: 'Pixel 5',
    screenSizeInches: 6,
    storageGB: 128,
    ramGB: 8,
    priceInDollars: 699
}

const phone9: Phone = {
    id: 9,
    make: 'Apple',
    model: 'iPhone 12 Pro Max',
    screenSizeInches: 6.7,
    storageGB: 256,
    ramGB: 8,
    priceInDollars: 1200
}

phones.push(phone1);
phones.push(phone2);
phones.push(phone3);
phones.push(phone4);
phones.push(phone5);
phones.push(phone6);
phones.push(phone7);
phones.push(phone8);
phones.push(phone9);

export interface Phone {
    id: number;
    make: string;
    model: string;
    screenSizeInches: number;
    storageGB: number;
    ramGB: number;
    priceInDollars: number
}