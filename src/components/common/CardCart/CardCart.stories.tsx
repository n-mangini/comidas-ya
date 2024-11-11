import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CardCart, { CardCartProps } from './CardCart';

export default {
    title: 'Components/CardCart',
    component: CardCart,
    argTypes: {
        imageUrl: { control: 'text' },
        title: { control: 'text' },
        description: { control: 'text' },
        price: { control: 'number' },
    },
} as Meta;

const Template: StoryFn<CardCartProps> = (args) => <CardCart {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageUrl: 'https://www.simplyrecipes.com/thmb/Sw2rWO2l615LjOnmUyDIWjAMDKg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__04__honey-glazed-roast-chicken-horiz-a-1800-2057270028084ff2bdb54fcb0f2d3227.jpg',
    title: 'Chicken Dish',
    description: 'A delicious chicken dish with herbs and spices.',
    price: 12.99,
};