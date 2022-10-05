/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable one-var */
// Used to get nested accessor
export const getPropByString = (obj: any, propString: any) => {
  if (!propString) return obj;

  var prop,
    props = propString.split('.');

  for (var i = 0, iLen = props.length - 1; i < iLen; i += 1) {
    prop = props[i];

    var candidate = obj[prop];
    if (candidate !== undefined) {
      obj = candidate;
    } else {
      break;
    }
  }
  // eslint-disable-next-line block-scoped-var
  return obj[props[i]];
};
