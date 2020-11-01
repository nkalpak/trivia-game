import React, { useState } from 'react';
import { arrayCreate } from '../../../../utils';
import { ButtonSkeletonStyled } from './button-skeletons-styles';

interface ButtonSkeletonsProps {
  count: number;
}

export const ButtonSkeletons: React.FC<ButtonSkeletonsProps> = ({ count }) => {
  const [buttons] = useState(arrayCreate(count));

  return (
    <>
      {buttons.map((_, i) => (
        <ButtonSkeletonStyled key={i}>
          <p style={{ visibility: 'hidden' }}>Fake text</p>
        </ButtonSkeletonStyled>
      ))}
    </>
  );
};
