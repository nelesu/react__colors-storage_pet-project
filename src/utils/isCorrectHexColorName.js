export default color => {
  const regexCorrectColorName = /^([A-Fa-f0-9]){6}|([A-Fa-f0-9]){3}$/i;
  return regexCorrectColorName.test(color);
}