import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const meta: Meta = {
  title: 'button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Disabled</Button>
);

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  type: 'primary',
};

export default meta;
