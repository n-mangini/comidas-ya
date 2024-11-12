import React from 'react';
import {StoryFn} from '@storybook/react';
import ListItemFood, {ListItemFoodProps} from './ListItemFood';

export default {
    title: 'Components/ListItemFood',
    component: ListItemFood,
    argTypes: {
        imageUrl: {control: 'text'},
        name: {control: 'text'},
        price: {control: 'number'},
    },
};

const Template: StoryFn<ListItemFoodProps> = (args) => <ListItemFood {...args} />;

export const Default = Template.bind({});
Default.args = {
    imageUrl: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/pouring-honey-on-pancakes.jpg',
    name: 'Sample Food',
    price: 9.99,
};
