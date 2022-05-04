import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const meta: Meta = {
  title: 'button',
  component: Button,
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>Link</Button>;

export const Link = Template.bind({});

Link.args = {
  type: 'link',
};

export default meta;
