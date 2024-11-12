import React from 'react';
import {StoryFn} from '@storybook/react';
import Dot, {DotProps} from './Dot';

export default {
    title: 'Components/Common/Dot',
    component: Dot,
    argTypes: {
        checked: {control: 'boolean'},
        disabled: {control: {type: 'boolean', disable: true}},
    },
};

const Template: StoryFn<DotProps> = (args) => <Dot {...args} />;

export const Default = Template.bind({});
Default.args = {
    checked: true,
    disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
    checked: false,
    disabled: true,
};
