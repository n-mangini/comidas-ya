import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import RecipeCarousel from './RecipeCarousel';
import {RecipeCardProps} from './RecipeCard';

export default {
    title: 'Components/RecipeCarousel/RecipeCarousel',
    component: RecipeCarousel,
    parameters: {
        layout: 'centered',
    },
} as Meta<typeof RecipeCarousel>;

const Template: StoryFn<typeof RecipeCarousel> = (args) => <RecipeCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
    recipes: [
        {
            title: 'Pollo asado al horno. Ideal para Fiestas',
            labels: ['label', 'label', 'label', 'label'],
        },
        {
            title: 'Pollo asado al horno. Ideal para Fiestas',
            labels: ['label', 'label', 'label', 'label'],
        },
        {
            title: 'Pollo asado al horno. Ideal para Fiestas',
            labels: ['label', 'label', 'label', 'label'],
        },
        {
            title: 'Pollo asado al horno. Ideal para Fiestas',
            labels: ['label', 'label', 'label', 'label'],
        },
        {
            title: 'Pollo asado al horno. Ideal para Fiestas',
            labels: ['label', 'label', 'label', 'label'],
        },
    ],
};
