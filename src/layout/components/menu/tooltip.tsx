import React, { memo, useContext, ReactElement } from 'react';
import {
  Tooltip as MuiTooltip,
  List,
  ListItemText,
  ListItemButton,
  useTheme,
} from '@mui/material';
import { LayoutContext } from '../../layout';
import { Route } from '../../layout.props';
import { useActiveColor } from './route-list';

export const RoutesTooltip = ({ route }: { route: Route }) => {
  const theme = useTheme();
  const {
    api: { route: menuRoute },
  } = useContext(LayoutContext);
  const bgColor = useActiveColor(menuRoute, route.path, theme);

  return (
    <List sx={{ width: 120 }} dense={true}>
      {route?.routes?.length ? (
        route?.routes.map((ret) => (
          <ListItemButton key={ret.path} sx={{ backgroundColor: bgColor }}>
            <ListItemText>{ret.name}</ListItemText>
          </ListItemButton>
        ))
      ) : (
        <ListItemButton sx={{ backgroundColor: bgColor }}>
          <ListItemText>{route.name}</ListItemText>
        </ListItemButton>
      )}
    </List>
  );
};

const TooltipComponent = ({
  route,
  children,
}: {
  route: Route;
  children: ReactElement<any, any>;
}) => {
  const {
    api: { open },
  } = useContext(LayoutContext);

  return open ? (
    <>{children}</>
  ) : (
    <MuiTooltip
      placement={'right'}
      arrow={true}
      title={<RoutesTooltip route={route} />}
    >
      {children}
    </MuiTooltip>
  );
};

export const Tooltip = memo(
  TooltipComponent,
  (prev, next) => prev.route === next.route
);
