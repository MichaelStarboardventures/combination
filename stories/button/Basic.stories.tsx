import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const meta: Meta = {
  title: 'button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>my button</Button>
);

export const Basic = Template.bind({});

export default meta;
