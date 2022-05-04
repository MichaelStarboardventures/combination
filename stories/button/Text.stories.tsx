import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const meta: Meta = {
  title: 'button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>Text</Button>;

export const Text = Template.bind({});

Text.args = {
  type: 'text',
};

export default meta;
