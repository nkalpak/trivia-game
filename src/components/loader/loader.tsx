import React from 'react';
// @ts-ignore
import { DualRing } from 'react-awesome-spinners';
import { LoaderInnerStyled, LoaderOuterStyled, LoaderTextStyled } from './loader-styles';

interface LoaderProps {
  text: string;
}

export const Loader: React.FC<LoaderProps> = ({ text }) => (
  <LoaderOuterStyled>
    <LoaderInnerStyled>
      <DualRing color="#fff" />
      <LoaderTextStyled>{text}</LoaderTextStyled>
    </LoaderInnerStyled>
  </LoaderOuterStyled>
);
