import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tags, TagsGroupProps } from '../../src/tags';

const { Group } = Tags;

const meta: Meta = {
  title: 'Tags',
  component: Tags,
  subcomponents: { 'Tags.Group': Group },
  argTypes: {
    value: {
      control: {
        type: 'text',
      },
    },
  },
};

const Template: Story<TagsGroupProps> = (args) => (
  <Group {...args} activeKey={'1'}>
    <Tags value={'1'}>tag1</Tags>
    <Tags value={'2'}>tag2</Tags>
    <Tags value={'3'}>tag3</Tags>
  </Group>
);

export const Basic = Template.bind({});

export default meta;
