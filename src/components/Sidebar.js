import React from 'react';
import { Grid } from 'reakit';

import SetSymbol from './mtgIcons/SetSymbol';

const Header = () => {
  return (
    <Grid.Item area="sidebar">
      <SetSymbol set="w" size="16px" />
    </Grid.Item>
  );
};

export default Header;
