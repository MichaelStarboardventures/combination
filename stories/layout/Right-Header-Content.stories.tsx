import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IconButton } from '@mui/material';
import { DashboardOutlined, NotificationsOutlined } from '@mui/icons-material';
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
          path: '/Dashboard',
          name: 'Dashboard',
          icon: <DashboardOutlined />,
        },
      ],
    }}
    rightContentRender={() => {
      return (
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
      );
    }}
  >
    Right Header Content
  </Layout>
);

export const RightHeaderContent = Template.bind({});

export default meta;
