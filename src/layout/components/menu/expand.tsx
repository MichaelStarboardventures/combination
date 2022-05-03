import React from 'react';
import { Route } from '@/layout';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

export const Expand = ({ open, route }: { open: boolean; route?: Route }) => {
  if (!route?.routes?.length) return null;

  return open ? (
    <ExpandLess data-testid={'expandLess'} />
  ) : (
    <ExpandMore data-testid={'expandMore'} />
  );
};
