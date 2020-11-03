import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyButton, MyButtonProps } from './myButton';

export default {
    title: 'My Stuff/MyButton',
    component: MyButton
} as Meta;

const Template: Story<MyButtonProps> = (args) => <MyButton {...args}/>

export const WishlistButton = Template.bind({});
WishlistButton.args = {
    primary: true,
    label: 'Add to wishlist'
}

export const ShoppingCartButton = Template.bind({});
ShoppingCartButton.args = {
    ...WishlistButton.args,
    label: 'Add to shopping cart'
}

export const Remove = Template.bind({});
Remove.args = {
    primary: false,
    label: 'Remove'
}