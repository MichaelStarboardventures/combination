import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Section } from '../../src/section';
import { SectionProps } from '../../src/section';

const meta: Meta = {
  title: 'Section',
  component: Section,
  argTypes: {
    sx: {
      control: {
        type: 'object',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template: Story<SectionProps> = (args) => (
  <Section {...args}>hello section component</Section>
);

export const Basic = Template.bind({});

export default meta;
