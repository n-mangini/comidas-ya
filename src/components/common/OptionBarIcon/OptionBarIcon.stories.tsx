import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import OptionBarIcon, { OptionBarIconProps } from './OptionBarIcon';

export default {
    title: 'Components/OptionBarIcon',
    component: OptionBarIcon,
    argTypes: {
        imageUrl: { control: 'text' },
        title: { control: 'text' },
    },
} as Meta;

const Template: StoryFn<OptionBarIconProps> = (args) => <OptionBarIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageUrl: 'https://i.pinimg.com/736x/9e/9f/df/9e9fdf16e0c10756436814d1df5b0d99.jpg',
    title: 'Sample Icon',
};