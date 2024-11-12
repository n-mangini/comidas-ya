import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import {Icon, IconProps} from './index';

// Import some example SVG icons
import {ReactComponent as shopping_cart} from "../../../assets/icons/shopping_cart.svg";
import {ReactComponent as repeat} from "../../../assets/icons/repeat.svg";

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
        color: {
            control: {type: 'select'},
            options: ['text-black', 'text-white', 'text-primary-500', 'text-secondary-500'],
        },
        icon: {
            control: false, // Disable control for icon since we'll provide specific examples below
        },
    },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const ShoppingCart = Template.bind({});
ShoppingCart.args = {
    icon: shopping_cart,
    color: 'text-black',
};

export const Heart = Template.bind({});
Heart.args = {
    icon: repeat,
    color: 'text-black',
};
