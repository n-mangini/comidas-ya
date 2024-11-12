import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import RecipePage from './RecipePage';
import '../../styles/index.css'; // Ensure global styles are included

export default {
    title: 'Pages/RecipePage',
    component: RecipePage,
    parameters: {
        layout: 'fullscreen',
    },
} as Meta<typeof RecipePage>;

const Template: StoryFn = () => <RecipePage/>;

export const Default = Template.bind({});
Default.args = {};
