import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import UnitsBar from './UnitsBar';

export default {
    title: 'components/UnitsBar',
    component: UnitsBar,
} as Meta;

const Template: StoryFn<typeof UnitsBar> = (args) => <UnitsBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
