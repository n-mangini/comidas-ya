import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label, { LabelProps } from './index';

export default {
    title: 'Components/Label',
    component: Label,
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
                options: ['primary', 'secondary', 'tertiary'],
            },
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
    },
} as Meta<typeof Label>;

// Base template for the Label component
const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

// Stories for different variants and types

// Primary Label Variants
export const PrimaryFulfilled = Template.bind({});
PrimaryFulfilled.args = {
    text: 'Primary Fulfilled',
    variant: 'fulfilled',
    variantType: 'primary',
    size: 'medium',
};

export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
    text: 'Primary Outlined',
    variant: 'outlined',
    variantType: 'primary',
    size: 'medium',
};

export const PrimaryGhost = Template.bind({});
PrimaryGhost.args = {
    text: 'Primary Ghost',
    variant: 'ghost',
    variantType: 'primary',
    size: 'medium',
};

// Secondary Label Variants
export const SecondaryFulfilled = Template.bind({});
SecondaryFulfilled.args = {
    text: 'Secondary Fulfilled',
    variant: 'fulfilled',
    variantType: 'secondary',
    size: 'medium',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
    text: 'Secondary Outlined',
    variant: 'outlined',
    variantType: 'secondary',
    size: 'medium',
};

export const SecondaryGhost = Template.bind({});
SecondaryGhost.args = {
    text: 'Secondary Ghost',
    variant: 'ghost',
    variantType: 'secondary',
    size: 'medium',
};

// Tertiary Label Variants
export const TertiaryFulfilled = Template.bind({});
TertiaryFulfilled.args = {
    text: 'Tertiary Fulfilled',
    variant: 'fulfilled',
    variantType: 'tertiary',
    size: 'medium',
};

export const TertiaryOutlined = Template.bind({});
TertiaryOutlined.args = {
    text: 'Tertiary Outlined',
    variant: 'outlined',
    variantType: 'tertiary',
    size: 'medium',
};

export const TertiaryGhost = Template.bind({});
TertiaryGhost.args = {
    text: 'Tertiary Ghost',
    variant: 'ghost',
    variantType: 'tertiary',
    size: 'medium',
};
