import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyButton, MyButtonProps } from './myButton';

export default {
    title: 'Test/MyButton',
    component: MyButton
} as Meta;

const Template: Story<MyButtonProps> = (args) => <MyButton {...args}/>

export const AddToWishlist = Template.bind({});
AddToWishlist.args = {
    primary: true,
    label: 'Add to wishlist'
}

export const AddToShoppingCart = Template.bind({});
AddToShoppingCart.args = {
    ...AddToWishlist.args,
    label: 'Add to shopping cart'
}

export const Remove = Template.bind({});
Remove.args = {
    primary: false,
    label: 'Remove'
}