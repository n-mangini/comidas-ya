import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import RecipeCard, {RecipeCardProps} from './RecipeCard';

export default {
    title: 'Components/RecipeCard', // Unique title to prevent conflicts
    component: RecipeCard,
} as Meta;

const Template: StoryFn<RecipeCardProps> = (args) => <RecipeCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Pollo asado al horno. Ideal para Fiestas',
    labels: ['label', 'label', 'label', 'label'],
};
