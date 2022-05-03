import React, { useContext } from 'react';
import {
  Grid as MuiGrid,
  Divider,
  styled,
  Avatar,
  Stack as MuiStack,
  IconButton,
} from '@mui/material';
import { LightMode } from '@mui/icons-material';
import { LayoutContext } from '../../layout';

const Grid = styled(MuiGrid)(() => ({
  height: 66,
}));

const Stack = styled(MuiStack)(() => ({
  height: '100%',
  padding: '0 14px',
}));

const size = {
  width: 24,
  height: 24,
};

export const Header = () => {
  const {
    api: { headerRender, rightContentRender },
  } = useContext(LayoutContext);

  const defaultAvatar = (
    <>
      <IconButton>
        <LightMode sx={{ ...size }} />
      </IconButton>
      <IconButton>
        <Avatar sx={{ ...size }} />
      </IconButton>
    </>
  );

  return (
    <>
      <Grid container={true}>
        <Grid item={true} xs={8} md={8} lg={8} data-testid={'headerContainer'}>
          {headerRender ? headerRender() : null}
        </Grid>
        <Grid
          item={true}
          xs={4}
          md={4}
          lg={4}
          data-testid={'rightHeaderContainer'}
        >
          <Stack
            spacing={1}
            alignItems={'center'}
            justifyContent={'end'}
            direction={'row'}
          >
            {rightContentRender
              ? rightContentRender({ dom: defaultAvatar })
              : defaultAvatar}
          </Stack>
        </Grid>
        <Grid item={true} xs={12} md={12} lg={12}>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
};
