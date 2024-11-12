import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FoodCategoryFilter from './FoodCategoryFilter';

import { ReactComponent as Image } from './assets/image.svg';
import { ReactComponent as Image1 } from './assets/image1.svg';
import { ReactComponent as Image2 } from './assets/image2.svg';
import { ReactComponent as Image3 } from './assets/image3.svg';
import { ReactComponent as Image4 } from './assets/image4.svg';
import { ReactComponent as Image5 } from './assets/image5.svg';

export default {
    title: 'FoodCategoryFilter/FoodCategoryFilter',
    component: FoodCategoryFilter,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn = (args) => <FoodCategoryFilter {...args} />;

const categories = [
    { icon: Image, label: 'Hamburger' },
    { icon: Image1, label: 'Carne' },
    { icon: Image2, label: 'Sushi' },
    { icon: Image3, label: 'Taco' },
    { icon: Image4, label: 'Empanada' },
    { icon: Image5, label: 'Helado' },
];

// Default Story
export const Default = Template.bind({});
Default.args = {
    categories,
};
