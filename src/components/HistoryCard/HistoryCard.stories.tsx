import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import HistoryCard, {HistoryCardProps} from "./HistoryCard";

export default {
    title: 'Components/HistoryCard',
    component: HistoryCard,
    argTypes: {
        title: {control: 'text'},
        quantity: {control: 'number'},
        description: {control: 'text'},
        imageUrl: {control: 'text'},
    },
} as Meta;

const Template: StoryFn<HistoryCardProps> = (args) => <HistoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Sample Title',
    quantity: 5,
    description: 'This is a sample description for the history card.',
    imageUrl: 'https://www.simplyrecipes.com/thmb/Sw2rWO2l615LjOnmUyDIWjAMDKg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2007__04__honey-glazed-roast-chicken-horiz-a-1800-2057270028084ff2bdb54fcb0f2d3227.jpg',
};
