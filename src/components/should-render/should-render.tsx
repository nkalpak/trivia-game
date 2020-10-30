import React from 'react';
import { ShouldRenderProps } from './should-render-types';

export const ShouldRender = ({ children, condition }: ShouldRenderProps) => (
  condition ? <>{children}</> : null
);

