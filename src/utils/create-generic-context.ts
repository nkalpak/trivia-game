import React, { createContext } from 'react';

function createGenericContext<T>() {
  const context = createContext<T | undefined>(undefined);
  const useGenericContext = () => {
    const c = React.useContext(context);
    if (!c) throw new Error('useContext must be used inside a provider with a value');
    return c;
  };

  return [useGenericContext, context.Provider] as const;
}

export { createGenericContext };
