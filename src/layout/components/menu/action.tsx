import React, { useContext } from 'react';
import { IconButton as MuiIconButton, styled } from '@mui/material';
import { MenuOpenOutlined } from '@mui/icons-material';
import { MenuActionStyled } from '../../style';
import { LayoutContext } from '../../layout';

const IconButton = styled(MuiIconButton, {
  shouldForwardProp: (propName: PropertyKey) => propName !== 'open',
})<{ open: boolean }>(({ open }) => ({
  transform: `rotateY(${open ? 0 : '180deg'})`,
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
