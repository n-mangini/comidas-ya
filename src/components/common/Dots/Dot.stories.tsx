import React from 'react';
import Dot, {DotsProps} from "./Dot";
import {StoryFn } from '@storybook/react';

export default {
    title: 'Components/Dot',
    component: Dot,
    argTypes: {
        checked: { control: 'boolean' },
        disabled: { control: { type: 'boolean', disable: true } },
    },
};

const Template: StoryFn<DotsProps> = (args) => <Dot {...args} />;

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
