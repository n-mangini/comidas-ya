import React from 'react';
import {Meta, StoryFn} from '@storybook/react';
import SearchBar, {SearchBarProps} from './InputField';

export default {
    title: 'Components/Common/InputField',
    component: SearchBar,
    argTypes: {
        showHelperText: {control: 'boolean'},
        showLabelText: {control: 'boolean'},
        isDisabled: {control: false},
        hasError: {control: false},
    },
} as Meta;

const Template: StoryFn<SearchBarProps> = (args) => <SearchBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    labelText: 'Search',
    placeholder: 'Type to search...',
    helperText: 'Enter a search term to find results',
    hasError: false,
    isDisabled: false,
    showHelperText: true,
    showLabelText: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    labelText: 'Search',
    placeholder: 'Type to search...',
    helperText: 'Enter a search term to find results',
    hasError: false,
    isDisabled: true,
    showHelperText: true,
    showLabelText: true,
};

export const Error = Template.bind({});
Error.args = {
    labelText: 'Search',
    placeholder: 'Type to search...',
    helperText: 'There is a error',
    hasError: true,
    isDisabled: false,
    showHelperText: true,
    showLabelText: true,
};
