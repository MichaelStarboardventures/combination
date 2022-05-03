import React, { FC } from 'react';
import { Header } from '../header';
import { ContentStyled, ContentWrapper } from '../../style';

export const Content: FC = ({ children }) => {
  return (
    <ContentWrapper>
      <Header />
      <ContentStyled>{children}</ContentStyled>
    </ContentWrapper>
  );
};
