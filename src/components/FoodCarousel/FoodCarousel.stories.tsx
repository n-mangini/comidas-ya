import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import FoodCarousel, {FoodCarouselProps} from './FoodCarousel';
import {FoodItem} from '../../pages/FoodHome/recommendedFoodItems';
import BlankImg from "../../assets/images/blank.svg";

const sampleFoodItems: FoodItem[] = [
    {
        title: "Chicken Hawaiian",
        description: "The chicken from Hawaii",
        price: 10.35,
        imageUrl: BlankImg,
        discount: "30% off",
        labels: ["spicy", "new", "popular"]
    },
    {
        title: "Burger with Fries",
        description: "Classic cheeseburger with fries",
        price: 8.99,
        imageUrl: BlankImg,
        discount: "20% off",
        labels: ["classic", "combo"]
    },
    {
        title: "Sushi Platter",
        description: "Assorted sushi platter",
        price: 15.99,
        imageUrl: BlankImg,
        labels: ["fresh", "seafood"]
    },
    {
        title: "Pasta Alfredo",
        description: "Creamy Alfredo pasta",
        price: 12.50,
        imageUrl: BlankImg,
        discount: "10% off",
        labels: ["vegetarian"]
    },
];

export default {
    title: 'Components/FoodCarousel/FoodCarousel',
    component: FoodCarousel,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn<FoodCarouselProps> = (args) => <FoodCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    foodItems: sampleFoodItems,
};
