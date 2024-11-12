import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Home from './FoodHome';
import '../../styles/index.css';

export default {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof Home>;

const Template: StoryFn = () => <Home/>;


export const Default = Template.bind({});
Default.args = {};
