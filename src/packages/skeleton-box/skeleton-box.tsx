import React, { useState } from 'react';
import { arrayCreate } from '../../utils';
import { SkeletonBoxStyled } from './skeleton-box-styles';

interface SkeletonBoxProps {
  lines?: number;
}

export const SkeletonBox: React.FC<SkeletonBoxProps> = ({ lines }) => {
  const [boxes] = useState(arrayCreate(lines));

  return (
    <>
      {boxes.map((_, i) => (
        <SkeletonBoxStyled key={i}>
          <p style={{ visibility: 'hidden' }}>Fake text</p>
        </SkeletonBoxStyled>
      ))}
    </>
  );
};
