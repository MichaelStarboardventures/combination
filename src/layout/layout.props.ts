import React, { ReactNode } from 'react';
import { ThemeOptions } from '@mui/material';

export type Route = {
  name: string;
  path: string;
  icon?: ReactNode;
  routes?: Route[];
};

export type HeaderViewProps = {
  dom: ReactNode;
};

export interface LayoutProps {
  /**
   * 自定义内容
   */
  children?: ReactNode;
  /**
   * layout 的左上角 的 title
   */
  title?: ReactNode;

  /**
   * layout 的左上角 logo 的 url
   */
  logo?: ReactNode;

  /**
   * 用于生成菜单
   */
  route?: {
    routes: Route[];
    action?: {
      push?: (path: string) => void;
    } & Record<string, any>;
  };

  /**
   * 自定义头的 render 方法
   */
  headerRender?: () => ReactNode;

  /**
   * 自定义头右部的 render 方法
   */
  rightContentRender?: (props: HeaderViewProps) => ReactNode;

  /**
   * 自定义菜单项的 render 方法
   * @param item
   * @param dom
   */
  menuItemRender?: (item: Route, dom: ReactNode) => ReactNode;

  /**
   * 控制菜单的收起和展开
   */
  collapsed?: boolean;

  /**
   * 菜单的折叠收起事件
   * @param collapsed
   */
  onCollapse?: (collapsed: boolean) => void;
}

export type LayoutContextProps = {
  /**
   * 开启菜单
   */
  open: boolean;

  /**
   * 设置菜单开启关闭
   */
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * 设置主题
   * @param theme
   */
  setTheme?: (theme: ThemeOptions) => void;

  theme: ThemeOptions;
} & LayoutProps;
