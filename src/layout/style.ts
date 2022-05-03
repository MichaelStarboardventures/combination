// import styled from 'styled-components';
import { styled } from '@mui/material';

export const ContainerStyled = styled('div')(() => ({
  display: 'flex',
  height: '100vh',
  overflow: 'auto',
  backgroundColor: '#fff',
  border: '1px solid #cfd0d3',
}));

export const HeaderStyled = styled('div')(() => ({
  height: '66px',
  padding: '24px 0px',
  boxSizing: 'border-box',
}));

export const FooterStyled = styled('div')(() => ({
  height: '35px',
  textAlign: 'center',
  lineHeight: '35px',
  fontSize: '12px',
}));

export const MenuStyled = styled('div', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  width: 195,
  height: '100vh',
  overflow: 'hidden',
  borderRight: '1px solid #cfd0d3',
  boxSizing: 'border-box',
  transition: theme.transitions.create('width', {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
    delay: 200,
  }),
  ...(!open && {
    width: 60,
    transition: theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
      delay: 200,
    }),
  }),
}));

export const MenuActionStyled = styled('div')(({ theme }) => ({
  paddingLeft: 9,
  borderTop: `1px solid ${theme.palette.divider}`,
}));

export const TitleStyled = styled('div')(() => ({
  padding: '5px 14px',
}));

export const ContentStyled = styled('div')(() => ({
  height: `calc(100vh - 66px)`,
  padding: 24,
  boxSizing: 'border-box',
}));

export const ContentWrapper = styled('div')(() => ({
  height: '100vh',
  flexGrow: 8,
}));

export const TooltipContentStyled = styled('div')(() => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
}));
