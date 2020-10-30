export const createUri = (paths: string[], params: Record<string, string>) => (
  `${getPathString(paths)}${getParamString(params)}`
);

const getParamString = (params: Record<string, string>) => {
  const paramNames = Object.keys(params);
  if (paramNames.length === 0) return null;

  const firstParam = paramNames[0];

  let paramString = `?${firstParam}=${params[firstParam]}`;

  for (let i = 1; i < paramNames.length; i++) {
    const currentParamName = paramNames[i];
    const currentParamValue = params[currentParamName];
    paramString = `${paramString}&${currentParamName}=${currentParamValue}`;
  }

  return paramString;
};

const getPathString = (paths: string[]) => {
  if (paths.length === 0) return null;

  let pathString = '';
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i];
    if (path[0] === '/') {
      pathString = `${pathString}${path}`;
    } else {
      pathString = `${pathString}/${path}`;
    }
  }

  return pathString;
};
