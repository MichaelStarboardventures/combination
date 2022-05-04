import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../../src';

const meta: Meta = {
  title: 'button',
  component: Button,
};

export default meta;

const Template: Story<ButtonProps> = (args) => {
  return (
    <React.Fragment>
      <Button {...args} />
      <Button type="primary" disabled={true} />
      <br />
      <Button type="link" href="www.baidu.com" />
      <Button type="text" />
    </React.Fragment>
  );
};

export const Basic = Template.bind({});
