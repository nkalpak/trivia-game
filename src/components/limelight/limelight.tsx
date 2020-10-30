import React from 'react';
import { LimelightStyled } from './limelight-styles';

export const Limelight: React.FC = ({ children }) => (
  <LimelightStyled>
    {children}
  </LimelightStyled>
);
