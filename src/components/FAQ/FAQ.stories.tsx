import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import FAQ from "./FAQ";

export default {
    title: 'Components/Slide',
    component: FAQ,
} as Meta;

const Template: StoryFn<typeof FAQ> = (args) => <FAQ {...args} />;

export const Open = Template.bind({});
Open.args = {
    title: 'Sample Title',
    content: 'This is the content of the slide.',
    isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
    title: 'Sample Title',
    content: 'This is the content of the slide.',
    isOpen: false,
};
