import React from 'react';
import styled from 'styled-components';
import keyrune from './keyrune';

const Icon = styled.svg`
  padding: 4px;
  height: ${props => props.size};
  width: ${props => props.size};
  display: inline-block;
`;

const SetSymbol = ({ set, size, cost }) => {
  const getSymbol = set => {
    return keyrune.icons.find(icon => {
      return icon.tags[0] === set;
    });
  };

  const icon = getSymbol(set);
  if (!icon) {
    return 'NOT FOUND';
  }

  const { paths, width } = icon;

  return (
    <Icon
      xmlns={'http://www.w3.org/2000/svg'}
      viewBox={width ? `0 0 ${width} 1024` : '0 0 1024 1024'}
      size={size}
      cost={cost}
    >
      <path d={paths[0]} />
    </Icon>
  );
};

export default SetSymbol;
