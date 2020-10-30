import React from 'react';

type HeadingTypes = 'h1' | 'h2' | 'h3'| 'h4'| 'h5'| 'h6'

interface HeadingProps {
  component: HeadingTypes
}

export const Heading: React.FC<HeadingProps> = ({ children, component }) => {
  const HeadingType = component;

  return (
    <HeadingType>{children}</HeadingType>
  );
};
