import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import TopBar, {TopBarProps} from "./TopBar";


export default {
    title: "Components/Common/TopBar",
    component: TopBar,
    argTypes: {
        address: {control: "text"}, // Control to change the address text in Storybook
    },
} as Meta;

const Template: StoryFn<TopBarProps> = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    address: "Mariano Acosta 1811", // Default value for the address prop
};
