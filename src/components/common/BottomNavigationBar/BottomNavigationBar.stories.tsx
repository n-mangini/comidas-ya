import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import BottomNavigationBar, {BottomNavigationBarProps} from "./index";

export default {
    title: "Components/BottomNavigationBar",
    component: BottomNavigationBar,
    argTypes: {
        defaultSelected: {
            control: { type: "radio" },
            options: ["inicio", "promociones", "pedidos"],
        },
    },
} as Meta;

const Template: StoryFn<BottomNavigationBarProps> = (args) => <BottomNavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    defaultSelected: "inicio",
};
