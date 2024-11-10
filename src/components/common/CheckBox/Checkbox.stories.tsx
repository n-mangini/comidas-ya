import React from 'react';
import CheckBox, {CheckBoxProps} from "./Checkbox";
import {StoryFn } from '@storybook/react';

export default {
    title: 'Components/CheckBox',
    component: CheckBox,
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: { type: 'boolean', disable: true } },
    },
};

const Template: StoryFn<CheckBoxProps> = (args) => <CheckBox {...args} />;

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
