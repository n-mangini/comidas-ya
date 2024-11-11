import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Title from './Title';

export default {
    title: 'components/Title',
    component: Title,
} as Meta;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Sample Title',
};