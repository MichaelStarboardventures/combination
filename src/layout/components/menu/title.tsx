import React, { memo, useContext } from 'react';
import { styled } from '@mui/material';
import { LayoutContext } from '../../layout';
import { TitleStyled } from '../../style';
import { LayoutProps } from '@/layout';

const TitleEmpty = styled('div')(() => ({
  backgroundColor: '#cfd0d3',
  height: 40,
  cursor: 'pointer',
}));

const TitleComponent: React.FC<{ title: LayoutProps['title'] }> = ({
  title,
}) => {
  const {
    api: { route },
  } = useContext(LayoutContext);

  return (
    <TitleStyled
      onClick={() => {
        route?.action?.push && route?.action?.push('/');
      }}
    >
      {title ? title : <TitleEmpty />}
    </TitleStyled>
  );
};

export const Title = memo(
  TitleComponent,
  (prev, next) => prev.title === next.title
);
