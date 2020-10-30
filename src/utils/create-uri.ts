export const createUri = (paths: string[], params: Record<string, string>) => (
  `${getPathString(paths)}${getParamString(params)}`
);

const getParamString = (params: Record<string, string>) => {
  const paramNames = Object.keys(params);
  if (paramNames.length === 0) return null;

  const firstParamName = paramNames[0];

  let result = formatParam(firstParamName, params[firstParamName], true);
  for (let i = 1; i < paramNames.length; i++) {
    const currentParamName = paramNames[i];
    const currentParamValue = params[currentParamName];

    result = `${result}${formatParam(currentParamName, currentParamValue)}`;
  }

  return result;
};

const formatParam = (key: string, value: string, isFirst = false) => {
  if (isFirst) return `?${key}=${value}`;
  return `&${key}=${value}`;
};

const getPathString = (paths: string[]) => {
  if (paths.length === 0) return null;

  let result = '';
  for (let i = 0; i < paths.length; i++) {
    result = `${result}/${formatPath(paths[i])}`;
  }

  return result;
};

const formatPath = (path: string) => {
  if (path[0] === '/') return path.slice(1);
  return path;
};
