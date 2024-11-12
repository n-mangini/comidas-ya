// src/components/RecipePage/RecipePage.stories.tsx

import React from 'react';
import {StoryFn, Meta} from '@storybook/react';
import RecipeStep, {RecipeStepProps} from './RecipeStep';
import Step1Img from './assets/Step1.png';

export default {
    title: 'Components/RecipePage',
    component: RecipeStep,
    argTypes: {
        onBack: {action: 'onBack'},
        onNext: {action: 'onNext'},
    },
} as Meta;

const Template: StoryFn<RecipeStepProps> = (args) => <RecipeStep {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Pollo Asado',
    chefName: 'John Doe',
    imageUrl: Step1Img,
    stepTitle: 'Calentar el horno',
    stepDescription: 'Si tenés un pollo en el freezer y lo querés cocinar hoy, bajalo del congelador a la heladera unos 10-15 minutos antes de empezara cocinar, como MÍNIMO, no tiene que ser arriba de la mesada. No cuelgues.',
    currentStep: 0,
    totalSteps: 3,
};
