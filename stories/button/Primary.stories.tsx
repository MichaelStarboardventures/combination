import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const meta: Meta = {
  title: 'button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Primary</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'primary',
};

export default meta;
