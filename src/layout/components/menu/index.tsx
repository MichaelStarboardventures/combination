import React, { memo } from 'react';
import { Grid, styled } from '@mui/material';
import { Title } from './title';
import { List } from './list';
import { Action } from './action';
import { LayoutProps } from '../../layout.props';

const GridItem = styled(Grid)(() => ({
  width: '100%',
}));

const MenuComponent: React.FC<LayoutProps> = ({ title, route }) => {
  return (
    <Grid
      container={true}
      direction={'column'}
      justifyContent={'space-between'}
      sx={{ height: '100%' }}
    >
      <GridItem item={true}>
        <Title title={title} />
      </GridItem>
      <GridItem item={true} xs={10} md={10} xl={10}>
        <List routes={route?.routes} />
      </GridItem>
      <GridItem item={true}>
        <Action />
      </GridItem>
    </Grid>
  );
};

export const Menu = memo(
  MenuComponent,
  (prev, next) => prev.route === next.route
);
