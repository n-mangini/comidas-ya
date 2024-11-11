import React from 'react';
import RadioButton, {RadioButtonProps} from "./RadioButton";
import {StoryFn } from '@storybook/react';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: { type: 'boolean', disable: true } },
    },
};

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: true,
    disabled: false,
    secondary: false
};

export const Disabled = Template.bind({});
Default.args = {
    checked: false,
    disabled: true,
    secondary: false
};
