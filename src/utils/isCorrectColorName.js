export default ({ color, type }) => {

  if (type === "hex") {
    const regexCorrectColorName = /^([A-Fa-f0-9]){6}|([A-Fa-f0-9]){3}$/i;
    return regexCorrectColorName.test(color);
  } else if (type === 'rgba') {
    if (color.every(item => !!item === true || !(/\s{1,}/.test(item) === false))) {
      // every element of array converted to boolean return true
      return true;
    };
    return false;
  } else if (type === 'rgb') {
    if (color.every(item => !!item === true || !(/\s{1,}/.test(item) === false))) {
      // every element of array converted to boolean return true
      return true;
    };
    return false;
  };

}