import React, { FC, useCallback, useContext, useMemo, useState } from 'react';
import { LayoutContext } from '../../layout';
import {
  Collapse,
  List as MuiList,
  ListItemButton,
  ListItemIcon,
  ListItemText as MuiListItemText,
  styled,
  SxProps,
  ThemeOptions,
  useTheme,
} from '@mui/material';
import { Tooltip } from './tooltip';
import { Expand } from './expand';
import { TooltipContentStyled } from '../../style';
import { LayoutProps, Route } from '../../layout.props';

const ListItemText = styled(MuiListItemText)(() => ({
  overflow: 'hidden',
}));

export const useRouteSx = (route: Route) => {
  return useMemo(() => {
    return route?.routes?.length
      ? {
          component: 'div',
          disablePadding: true,
        }
      : {
          sx: { width: '100%', maxWidth: 360, bgcolor: 'background.paper' },
          component: 'nav',
          'aria-labelledby': 'nested-list-subheader',
          disablePadding: true,
        };
  }, [route]);
};

export const useActiveColor = (
  route: LayoutProps['route'],
  path: string,
  theme: ThemeOptions
) => {
  return useMemo(() => {
    const { palette } = theme;
    const mode = palette?.mode as string;
    const primary = palette?.primary as Record<string, any>;

    return route?.action?.history?.pathname === path
      ? palette?.primary && primary[mode]
      : 'unset';
  }, [route, path, theme]);
};

export const RouteList: FC<{ route: Route; sx?: SxProps; index: number }> = ({
  route,
  sx,
  index,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const {
    api: { route: menuRoute, open: menuOpen, menuItemRender },
  } = useContext(LayoutContext);
  const bgColor = useActiveColor(menuRoute, route.path, theme);

  const routeSx = useRouteSx(route);
  const handleClick = useCallback(
    (path: string) => {
      setOpen(!open);
      menuRoute?.action?.push && menuRoute?.action?.push(path);
    },
    [open]
  );

  const active = menuRoute?.action?.history?.pathname === route.path;
  const menuItemDom = (
    <>
      {route?.icon ? (
        <ListItemIcon
          sx={{ minWidth: 35, color: `${active ? '#fff' : 'unset'}` }}
        >
          {route?.icon}
        </ListItemIcon>
      ) : null}
      <ListItemText primary={route.name} />
    </>
  );

  return (
    <MuiList {...routeSx} data-testid={'route'}>
      <ListItemButton
        key={route.path}
        sx={{
          ...sx,
          backgroundColor: `${bgColor}`,
        }}
        onClick={() => handleClick(route.path)}
      >
        <Tooltip route={route}>
          <TooltipContentStyled>
            {menuItemRender ? menuItemRender(route, menuItemDom) : menuItemDom}
          </TooltipContentStyled>
        </Tooltip>
        {menuOpen && <Expand route={route} open={open} />}
      </ListItemButton>
      {route?.routes?.length ? (
        <Collapse in={!menuOpen ? false : open} timeout={'auto'}>
          {renderRoutes({
            routes: route.routes,
            sx: { pl: (index + 1) * 4 },
            index: ++index,
          })}
        </Collapse>
      ) : null}
    </MuiList>
  );
};

export const renderRoutes = ({
  routes,
  sx,
  index,
}: {
  routes?: Route[];
  sx?: SxProps;
  index: number;
}): JSX.Element[] | null => {
  if (!routes) return null;

  return routes.map((route) => {
    return <RouteList key={route.path} route={route} sx={sx} index={index} />;
  });
};
