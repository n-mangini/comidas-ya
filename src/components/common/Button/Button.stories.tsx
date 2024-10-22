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
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost Button',
  show_icon: false,
  show_text: true,
};

export const DisabledFulfilled = Template.bind({});
DisabledFulfilled.args = {
  variant: 'fulfilled',
  children: 'Disabled Fulfilled Button',
  show_icon: true,
  show_text: true,
  icon: '',
  disabled: true,
};

export const DisabledOutlined = Template.bind({});
DisabledOutlined.args = {
  variant: 'outlined',
  children: 'Disabled Outlined Button',
  show_icon: false,
  show_text: true,
  disabled: true,
};

export const DisabledGhost = Template.bind({});
DisabledGhost.args = {
  variant: 'ghost',
  children: 'Disabled Ghost Button',
  show_icon: false,
  show_text: true,
  disabled: true,
};

export const ActiveFulfilled = Template.bind({});
ActiveFulfilled.args = {
  variant: 'fulfilled',
  children: 'Active Fulfilled Button',
  show_icon: true,
  show_text: true,
  icon: '',
  className: 'active',
};

export const ActiveOutlined = Template.bind({});
ActiveOutlined.args = {
  variant: 'outlined',
  children: 'Active Outlined Button',
  show_icon: false,
  show_text: true,
  className: 'active',
};

export const ActiveGhost = Template.bind({});
ActiveGhost.args = {
  variant: 'ghost',
  children: 'Active Ghost Button',
  show_icon: false,
  show_text: true,
  className: 'active',
};
