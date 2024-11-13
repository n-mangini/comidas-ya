import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import RecipePage from './RecipePage';
import '../../styles/index.css';

export default {
    title: 'Pages/RecipePage',
    component: RecipePage,
    parameters: {
        layout: 'centered',
    },
} as Meta<typeof RecipePage>;

const Template: StoryFn = () => (
    <div style={{width: '430px', height: '932px', border: '1px solid #ddd', overflow: 'hidden'}}>
        <RecipePage/>
    </div>
);
export const Default = Template.bind({});
Default.args = {};
