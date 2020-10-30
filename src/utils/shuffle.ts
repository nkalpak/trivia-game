export const shuffle = <T>(array: T[]) => {
  const result = array.slice();

  for (let i = array.length - 1; i > 0; i--) {
    const shuffleIndex = Math.floor(Math.random() * i + 1);
    [result[i], result[shuffleIndex]] = [result[shuffleIndex], result[i]];
  }

  return result;
};
