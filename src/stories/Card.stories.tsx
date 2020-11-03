import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './Card';

export default {
    title: 'My Stuff/Card',
    component: Card
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args}/>

export const MainCard = Template.bind({});
MainCard.args = {
    main: true
}

export const SideCard = Template.bind({});
SideCard.args = {
    main: false
}