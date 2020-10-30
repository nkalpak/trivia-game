import { ReactNode, ReactNodeArray } from 'react';

export interface ShouldRenderProps {
  children: ReactNodeArray | ReactNode;
  condition: boolean;
}
