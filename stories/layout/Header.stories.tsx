import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { DashboardOutlined } from '@mui/icons-material';
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
    headerRender={() => (
      <ButtonGroup
        sx={{
          padding: '14px',
        }}
      >
        <Button variant={'contained'} color={'primary'}>
          header1
        </Button>
        <Button variant={'outlined'}>header2</Button>
        <Button variant={'outlined'}>header3</Button>
      </ButtonGroup>
    )}
  >
    Header Render
  </Layout>
);

export const Header = Template.bind({});

export default meta;
