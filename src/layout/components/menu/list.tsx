import React, { memo, FC } from 'react';
import { List as MuiList, styled } from '@mui/material';
import { renderRoutes } from './route-list';
import { Route } from '@/layout';

type Props = { routes?: Route[] };

const MuiListComponent = styled(MuiList)<{ component?: React.ElementType }>(
  () => ({
    width: '100%',
    // maxWidth: 360,
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
  })
);

const ListComponent: FC<Props> = ({ routes }) => {
  return (
    <MuiListComponent component={'nav'} aria-labelledby="nested-list-subheader">
      {renderRoutes({ routes, index: 0 })}
    </MuiListComponent>
  );
};

export const List = memo(
  ListComponent,
  (prev, next) => prev.routes === next.routes
);
