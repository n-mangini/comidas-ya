import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FoodCategoryIcon, { FoodCategoryIconProps } from './FoodCategoryIcon';
import { ReactComponent as Image } from './assets/image.svg';
import { ReactComponent as Image1 } from './assets/image1.svg';
import { ReactComponent as Image2 } from './assets/image2.svg';
import { ReactComponent as Image3 } from './assets/image3.svg';
import { ReactComponent as Image4 } from './assets/image4.svg';
import { ReactComponent as Image5 } from './assets/image5.svg';

export default {
    title: 'FoodCategoryFilter/FoodCategoryIcon',
    component: FoodCategoryIcon,
} as Meta;

const Template: StoryFn<FoodCategoryIconProps> = (args) => <FoodCategoryIcon {...args} />;

export const Hamburger = Template.bind({});
Hamburger.args = {
    icon: Image,
    label: 'Hamburger'
};

export const Carne = Template.bind({});
Carne.args = {
    icon: Image1,
    label: 'Carne'
};

export const Sushi = Template.bind({});
Sushi.args = {
    icon: Image2,
    label: 'Sushi'
};

export const Taco = Template.bind({});
Taco.args = {
    icon: Image3,
    label: 'Taco'
};

export const Empanada = Template.bind({});
Empanada.args = {
    icon: Image4,
    label: 'Empanada'
};

export const Helado = Template.bind({});
Helado.args = {
    icon: Image5,
    label: 'Helado'
};