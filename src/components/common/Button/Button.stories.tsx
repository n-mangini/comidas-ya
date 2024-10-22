import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button, { ButtonProps } from './Button';


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
    disabled: { control: 'boolean' },
    show_icon: { control: 'boolean' },
    show_text: { control: 'boolean' },
  },
} as Meta<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Fulfilled = Template.bind({});
Fulfilled.args = {
  variant: 'fulfilled',
  children: 'Fulfilled Button',
  show_icon: true,
  show_text: true,
  icon: '',
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined Button',
  show_icon: false,
  show_text: true,
  icon: '',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
  show_icon: false,
  show_text: true,
  icon: '',
};
