import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
  HomeOutlined,
  AppsOutlined,
  DashboardOutlined,
} from '@mui/icons-material';
import { Layout, LayoutProps } from '../../src';

const meta: Meta = {
  title: 'layout',
  component: Layout,
  argTypes: {
    title: {
      description: 'layout 的左上角 的 title',
      control: {
        type: 'text',
      },
    },
    logo: {
      description: 'layout 的左上角 logo 的 url',
      control: {
        type: null,
      },
    },
    route: {
      description: '用于生成菜单',
      control: {
        type: 'object',
      },
    },
    headerRender: {
      description: '自定义头的 render 方法',
      control: {
        type: null,
      },
    },
    action: {
      description: '注入行为对象',
      control: {
        type: null,
      },
    },
  },
};

const Template: Story<LayoutProps> = (args) => <Layout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  route: {
    routes: [
      {
        name: 'hello1',
        path: '/hello1',
        icon: <HomeOutlined />,
      },
      {
        name: 'hello2',
        path: '/hello2',
        icon: <AppsOutlined />,
        routes: [
          {
            name: 'hello3',
            path: '/hello3',
            icon: <AppsOutlined />,
          },
          {
            name: 'hello6',
            path: '/hello6',
            icon: <AppsOutlined />,
          },
          {
            name: 'hello7',
            path: '/hello7',
            icon: <AppsOutlined />,
          },
        ],
      },
      {
        name: 'hello4',
        path: '/hello4',
        icon: <DashboardOutlined />,
        routes: [
          {
            name: 'hello5',
            path: '/hello5',
            icon: <DashboardOutlined />,
          },
        ],
      },
    ],
  },
  children: <>hello layout</>,
};

export default meta;
