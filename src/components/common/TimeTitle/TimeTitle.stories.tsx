import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TimeTitle, { TimeTitleProps } from './TimeTitle';

export default {
    title: 'Components/TimeTitle',
    component: TimeTitle,
    argTypes: {
        time: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<TimeTitleProps> = (args) => <TimeTitle {...args} />;

export const Default = Template.bind({});
Default.args = {
    time: 'Today',
};