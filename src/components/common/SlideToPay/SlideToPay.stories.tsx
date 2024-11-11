import React from 'react';
import SlideToPay from './SlideToPay';
import {Meta, StoryFn} from "@storybook/react";

export default {
    title: 'components/SlideToPay',
    component: SlideToPay,
    argTypes: {

    }
} as Meta


const Template: StoryFn<typeof SlideToPay> = (args) => <SlideToPay {...args} />;

export const SlideToPayStory = Template.bind({});
SlideToPayStory.args = {
    showSlideIcon: true,
    showOkayIcon: false,
    isAError: false,
    moneyToPay: 100,
};

export const Confirmed = Template.bind({});
Confirmed.args = {
    showSlideIcon: false,
    showOkayIcon: true,
    isAError: false,
    moneyToPay: 100,
};

export const Problem = Template.bind({});
Problem.args = {
    showSlideIcon: false,
    showOkayIcon: false,
    isAError: true,
    moneyToPay: 100,
};