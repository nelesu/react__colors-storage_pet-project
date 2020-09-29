export default ({ color, type }) => {
  if (type === "hex") {
    const regexCorrectColorName = /^([A-Fa-f0-9]){6}|([A-Fa-f0-9]){3}$/i;
    return regexCorrectColorName.test(color);
  } else if (type === 'rgb') {
    return color;
  } else if (type === 'rgba') {
    return color;
  };

}