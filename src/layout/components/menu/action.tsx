import React, { useContext } from 'react';
import { IconButton as MuiIconButton } from '@mui/material';
import styled from 'styled-components';
import { MenuOpenOutlined as MuiMenuOpenOutlined } from '@mui/icons-material';
import { MenuActionStyled } from '../../style';
import { LayoutContext } from '../../layout';

const IconButton = styled(MuiIconButton)<{ open: boolean }>(({ open }) => ({
  transform: `rotateY(${open ? 0 : '180deg'})`,
}));

const MenuOpenOutlined = styled(MuiMenuOpenOutlined)(({ theme }) => ({
  color: `${theme.palette.mode === 'dark' ? '#fff' : 'unset'}`,
}));

export const Action = () => {
  const {
    api: { setOpen, open, onCollapse },
  } = useContext(LayoutContext);

  return (
    <MenuActionStyled>
      <IconButton
        data-testid={'action'}
        open={open}
        onClick={() => {
          setOpen && setOpen(!open);
          onCollapse && onCollapse(!open);
        }}
      >
        <MenuOpenOutlined />
      </IconButton>
    </MenuActionStyled>
  );
};
