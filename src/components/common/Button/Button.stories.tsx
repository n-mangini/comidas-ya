import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from './index';


export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['fulfilled', 'outlined', 'ghost'],
      },
    },
    variantType: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    disabled: { control: 'boolean' },
    show_icon: { control: 'boolean' },
    show_text: { control: 'boolean' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const FulfilledPrimary = Template.bind({});
FulfilledPrimary.args = {
  variant: 'fulfilled',
  variantType: 'primary',
  children: 'Fulfilled Primary Button',
  show_icon: true,
  show_text: true,
  icon: '',
};

export const OutlinedPrimary = Template.bind({});
OutlinedPrimary.args = {
  variant: 'outlined',
  variantType: 'primary',
  children: 'Outlined Primary Button',
  show_icon: false,
  show_text: true,
  icon: '',
};

export const GhostPrimary = Template.bind({});
GhostPrimary.args = {
  variant: 'ghost',
  variantType: 'primary',
  children: 'Ghost Primary Button',
  show_icon: false,
  show_text: true,
  icon: '',
};

export const FulfilledSecondary = Template.bind({});
FulfilledSecondary.args = {
  variant: 'fulfilled',
  variantType: 'secondary',
  children: 'Fulfilled Secondary Button',
  show_icon: false,
  show_text: true,
  icon: '',
};

export const OutlinedSecondary = Template.bind({});
OutlinedSecondary.args = {
  variant: 'outlined',
  variantType: 'secondary',
  children: 'Outlined Secondary Button',
  show_icon: false,
  show_text: true,
  icon: '',
};

export const GhostSecondary = Template.bind({});
GhostSecondary.args = {
  variant: 'ghost',
  variantType: 'secondary',
  children: 'Ghost Secondary Button',
  show_icon: false,
  show_text: true,
  icon: '',
};
