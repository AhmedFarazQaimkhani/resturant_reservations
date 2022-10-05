// Used to get nested property. Ex: customer.firstname
export const getNestedProperty = (obj: any, value: any) => {
  if (!value) return obj;
  const properties = value.split('.');
  return getNestedProperty(obj[properties.shift()], properties.join('.'));
};
