export const useSwitch = (values: {}) => {
  const switchFn =
    (lookupObject: any, defaultCase = '_default') =>
    (expression: any) =>
      lookupObject[expression] || lookupObject[defaultCase];

  const customSwitch = switchFn(values, 'default');
  return [customSwitch];
};
