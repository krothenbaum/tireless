import React from 'react';
import styled from 'styled-components';
import { InlineFlex, Block, Group, Button } from 'reakit';

import SetSymbol from './mtgIcons/SetSymbol';

const DraftContainer = styled(InlineFlex)`
  width: 100%
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid grey;
  padding: 16px;
  display: flex;
`;

const DraftField = styled(Block)`
  /* flex: 1 1 auto; */
  /* align-items: center; */
`;

const Draft = () => {
  return (
    <DraftContainer>
      <DraftField>7/12/2018</DraftField>
      <DraftField>
        <SetSymbol set={'dom'} size={'24px'} />
      </DraftField>
      <DraftField>League</DraftField>
      <DraftField>
        <SetSymbol set={'w'} size={'24px'} />
        <SetSymbol set={'u'} size={'24px'} />
      </DraftField>
      <DraftField>2-1</DraftField>
      <DraftField>
        <Group>
          <Button>EDIT</Button>
          <Button>DELETE</Button>
        </Group>
      </DraftField>
    </DraftContainer>
  );
};

export default Draft;
