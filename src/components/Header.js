import React from 'react';
import styled from 'styled-components';
import { Grid } from 'reakit';

import SetSymbol from './mtgIcons/SetSymbol';

const IzzetGradient = styled(Grid.Item)`
  /* background: rgb(52, 62, 139);
  background: linear-gradient(
    0deg,
    rgba(52, 62, 139, 1) 0%,
    rgba(191, 27, 26, 1) 100%
  ); */
`;

const Header = () => {
  return (
    <IzzetGradient area="header">
      <SetSymbol set="u" size="16px" />
    </IzzetGradient>
  );
};

export default Header;
