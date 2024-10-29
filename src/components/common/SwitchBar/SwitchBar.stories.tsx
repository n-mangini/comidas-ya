import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import SwitchBar from "./index";

export default {
    title: "Components/SwitchBar",
    component: SwitchBar,
    argTypes: {
        selection: {
            control: { type: "radio" },
            options: ["comidas", "recetas"],
        },
    },
} as Meta;

const Template: StoryFn = (args) => <SwitchBar {...args} />;

export const Comidas = Template.bind({});
Comidas.args = {
    selection: "comidas",
};

export const Recetas = Template.bind({});
Recetas.args = {
    selection: "recetas",
};
