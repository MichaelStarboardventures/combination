import React, { FC } from 'react';
import { SectionProps } from './section.props';

export const Section: FC<SectionProps> = ({ children, sx }) => {
  return <div style={{ ...sx }}>{children}</div>;
};
