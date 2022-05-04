import React, { useContext } from 'react';
import {
  Grid as MuiGrid,
  Divider as MuiDivider,
  Avatar,
  Stack as MuiStack,
  IconButton,
} from '@mui/material';
import styled from 'styled-components';
import { LightMode, DarkMode } from '@mui/icons-material';
import { LayoutContext } from '../../layout';

const Grid = styled(MuiGrid)(() => ({
  height: 66,
}));

const Divider = styled(MuiDivider)(({ theme }) => ({
  borderColor: `${theme.palette.divider}!important`,
}));

const Stack = styled(MuiStack)(() => ({
  height: '100%',
  padding: '0 14px',
}));

const size = {
  width: 24,
  height: 24,
};

const MuiDarkMode = styled(DarkMode)(({ theme }) => ({
  color: `${theme?.palette?.mode === 'dark' ? '#fff' : 'unset'}`,
}));

export const renderDefaultAvatar = () => {
  const {
    api: {
      setTheme,
      theme: { palette },
    },
  } = useContext(LayoutContext);
  const mode = palette?.mode === 'light' ? 'dark' : 'light';
  const ModeCom = mode === 'dark' ? LightMode : MuiDarkMode;

  return (
    <>
      <IconButton
        onClick={() => {
          setTheme &&
            setTheme({
              palette: { mode },
            });
        }}
      >
        <ModeCom sx={{ ...size }} />
      </IconButton>
      <IconButton>
        <Avatar sx={{ ...size }} />
      </IconButton>
    </>
  );
};

export const Header = () => {
  const {
    api: { headerRender, rightContentRender },
  } = useContext(LayoutContext);

  const defaultAvatar = renderDefaultAvatar();

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
