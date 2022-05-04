import React, { createContext, useCallback, useState } from 'react';
import { Menu } from './components/menu';
import { Content } from './components/content';
import { ContainerStyled, MenuStyled } from './style';
import { ThemeProvider } from 'styled-components';
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material';
import { LayoutProps, LayoutContextProps } from './layout.props';

export const LayoutContext = createContext<{ api: LayoutContextProps }>({
  api: {
    open: true,
    theme: {},
  },
});

export const Layout: React.FC<LayoutProps> = ({
  route,
  title,
  headerRender,
  rightContentRender,
  menuItemRender,
  collapsed,
  onCollapse,
  children,
}) => {
  const [theme, setTheme] = useState<ThemeOptions>(createTheme());
  const [menuOpen, setMenuOpen] = useState(true);

  const useSetTheme = useCallback((config: ThemeOptions) => {
    const theme = createTheme(config);
    setTheme(theme);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <LayoutContext.Provider
          value={{
            api: {
              open: menuOpen,
              setOpen: setMenuOpen,
              setTheme: useSetTheme,
              theme,
              route,
              headerRender,
              rightContentRender,
              menuItemRender,
              collapsed,
              onCollapse,
            },
          }}
        >
          <ContainerStyled data-testid={'layout'}>
            <MenuStyled open={menuOpen}>
              <Menu route={route} title={title} />
            </MenuStyled>
            <Content>{children}</Content>
          </ContainerStyled>
        </LayoutContext.Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
