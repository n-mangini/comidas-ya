
import {StoryFn} from "@storybook/react";
import React from "react";
import {Filter, FilterProps} from "./Filter";

export default {
    title: 'Components/Filter',
    component: Filter,
    argTypes: {
        text: { control: 'text' }
    },
};

const Template: StoryFn<FilterProps> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: "Label"
};