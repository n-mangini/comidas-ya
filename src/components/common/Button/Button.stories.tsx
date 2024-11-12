import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import Button, {ButtonProps} from './Button';
import {ReactComponent as shopping_cart} from "../../../assets/icons/shopping_cart.svg";

export default {
    title: 'Components/Common/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['fulfilled', 'outlined', 'ghost'],
            },
        },
        variantType: {
            control: {
                type: 'select',
                options: ['primary', 'secondary'],
            },
        },
        disabled: {control: 'boolean'},
        show_icon: {control: 'boolean'},
        show_text: {control: 'boolean'},

        iconColor: {
            control: {
                type: 'select',
                options: ['text-black', 'text-white', 'text-primary-500', 'text-secondary-500'],
            },
            defaultValue: 'text-blue-500',
        },
    },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const FulfilledPrimary = Template.bind({});
FulfilledPrimary.args = {
    variant: 'fulfilled',
    variantType: 'primary',
    children: 'Fulfilled Primary Button',
    show_icon: true,
    show_text: true,
    icon: shopping_cart,
    icon_color: 'text-white',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
    variant: 'outlined',
    variantType: 'primary',
    children: 'Outlined Primary Button',
    show_icon: true,
    show_text: true,
    icon: shopping_cart,
    icon_color: 'text-white',
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
    variant: 'ghost',
    variantType: 'primary',
    children: 'Ghost Primary Button',
    show_icon: true,
    show_text: true,
    icon: shopping_cart,
    icon_color: 'text-white',
};

export const FulfilledSecondary = Template.bind({});
FulfilledSecondary.args = {
    variant: 'fulfilled',
    variantType: 'secondary',
    children: 'Fulfilled Secondary Button',
    show_icon: true,
    show_text: true,
    icon: shopping_cart,
    icon_color: 'text-white',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
    variant: 'outlined',
    variantType: 'secondary',
    children: 'Outlined Secondary Button',
    show_icon: true,
    show_text: true,
    icon: shopping_cart,
    icon_color: 'text-white',
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
    variant: 'ghost',
    variantType: 'secondary',
    children: 'Ghost Secondary Button',
    show_icon: true,
    show_text: true,
    icon: shopping_cart,
    icon_color: 'text-white',
};
