import React from 'react';
import { Grid } from 'reakit';

import SetSymbol from './mtgIcons/SetSymbol';

const Footer = () => (
  <Grid.Item area="footer">
    <SetSymbol set="r" size="16px" />
  </Grid.Item>
);

export default Footer;
