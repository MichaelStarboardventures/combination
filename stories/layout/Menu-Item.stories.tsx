import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Layout, LayoutProps } from '../../src';

const meta: Meta = {
  title: 'layout',
  component: Layout,
};

const Template: Story<LayoutProps> = (args) => (
  <Layout
    {...args}
    route={{
      routes: [
        {
          path: '/dashboard',
          name: 'dashboard',
        },
        {
          path: '/manage',
          name: 'manage',
        },
        {
          path: '/apps',
          name: 'apps',
        },
      ],
    }}
    menuItemRender={(_item, dom) => {
      return (
        <>
          menu &nbsp;&nbsp;&nbsp;
          {dom}
        </>
      );
    }}
  >
    menu item render
  </Layout>
);

export const MenuItem = Template.bind({});

export default meta;
