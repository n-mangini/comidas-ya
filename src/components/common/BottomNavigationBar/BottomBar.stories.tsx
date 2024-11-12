import React from "react";
import {Meta, StoryFn} from "@storybook/react";
import BottomNavigationBar, {BottomNavigationBarProps} from "./BottomBar";

export default {
    title: "Components/Common/BottomNavigationBar",
    component: BottomNavigationBar,
    argTypes: {
        defaultSelected: {
            control: {type: "radio"},
            options: ["inicio", "promociones", "pedidos"],
        },
    },
} as Meta;

const Template: StoryFn<BottomNavigationBarProps> = (args) => <BottomNavigationBar {...args} />;

export const Inicio = Template.bind({});
Inicio.args = {
    defaultSelected: "inicio",
};

export const Promociones = Template.bind({});
Promociones.args = {
    defaultSelected: "promociones",
};

export const Pedidos = Template.bind({});
Pedidos.args = {
    defaultSelected: "pedidos",
};
