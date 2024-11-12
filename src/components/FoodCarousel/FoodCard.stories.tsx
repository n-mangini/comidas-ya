import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import FoodCard, {FoodCardProps} from "./FoodCard";
import BlankImg from "../../assets/images/blank.svg";

export default {
    title: 'Components/FoodCarousel/FoodCard',
    component: FoodCard,
    argTypes: {
        title: {control: 'text'},
        description: {control: 'text'},
        price: {control: 'number'},
        imageUrl: {control: 'text'},
        discount: {control: 'text'},
        labels: {control: 'object'},
    },
} as Meta<FoodCardProps>;

// Template for the FoodCard story
const Template: StoryFn<FoodCardProps> = (args) => <FoodCard {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
    title: 'Chicken Hawaiian',
    description: 'The chicken from hawaii',
    price: 10.35,
    imageUrl: BlankImg,
    discount: '30% off',
    labels: ['label', 'hola', 'label', 'label'],
};

// Story with no discount
export const NoDiscount = Template.bind({});
NoDiscount.args = {
    title: 'Chicken Hawaiian',
    description: 'The chicken from hawaii',
    price: 10.35,
    imageUrl: BlankImg,
    discount: '',
    labels: ['pollo', 'carne', 'choclo', 'carne'],
};

// Story with multiple labels
export const MultipleLabels = Template.bind({});
MultipleLabels.args = {
    title: 'Chicken Hawaiian',
    description: 'The chicken from hawaii',
    price: 10.35,
    imageUrl: BlankImg,
    discount: '15% off',
    labels: ['pollo', 'carne', 'choclo', 'carne'],
};
