import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import Home from './FoodHome';
import '../../styles/index.css';

export default {
    title: 'Pages/Home',
    component: Home,
    parameters: {
        layout: 'centered',
    },
} as Meta<typeof Home>;

const Template: StoryFn = () => (
    <div style={{width: '430px', height: '932px', border: '1px solid #ddd', overflow: 'hidden'}}>
        <Home/>
    </div>
);

export const Default = Template.bind({});
Default.args = {};
