
const componentToHex = (c) => {
  c = +c; // try to convert to number
  var hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}
export default (...[r, g, b]) => {
  return "" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
