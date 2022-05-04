import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const meta: Meta = {
  title: 'button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Default</Button>
);

export const Default = Template.bind({});

Default.args = {
  type: 'default',
};

export default meta;
