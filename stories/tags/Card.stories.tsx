import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tags, TagsGroupProps } from '../../src/tags';

const meta: Meta = {
  title: 'Tags',
  component: Tags.Group,
  argTypes: {
    activeKey: {
      control: {
        type: 'string',
      },
    },
    type: {
      control: {
        type: 'select',
      },
    },
  },
};

const Template: Story<TagsGroupProps> = (args) => (
  <Tags.Group {...args}>
    <Tags value={1}>tags1</Tags>
    <Tags value={2}>tags2</Tags>
    <Tags value={3}>tags3</Tags>
  </Tags.Group>
);

export const Card = Template.bind({});

Card.args = {
  type: 'card',
};

export default meta;
