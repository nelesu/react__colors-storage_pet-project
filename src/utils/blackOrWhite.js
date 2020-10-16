const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

const parseRgba = (rgba) => {
  let result = /(\d{1,3}),\s(\d{1,3}),\s(\d{1,3}),\s(\d[.\d+]?)/.exec(rgba);
  return result ? {
    r: +result[1],
    g: +result[2],
    b: +result[3],
    a: +result[4],
  } : null;
};
const parseRgb = (rgb) => {
  let result = /(\d{1,3}),\s(\d{1,3}),\s(\d{1,3})/.exec(rgb);
  return result ? {
    r: +result[1],
    g: +result[2],
    b: +result[3]
  } : null;
};

export default ({ type, color }) => {
  console.log(color, 'bow');


  let r, g, b, hsp, a;
  if (type === 'hex') {
    color = hexToRgb(color);
  } else if (type === 'rgb') {
    color = parseRgb(color);
  } else if (type === 'rgba') {
    // write parseRgba if parse Rgb is working
    color = parseRgba(color);
    a = color.a;
  }

  if (color !== null) {
    r = color.r;
    g = color.g;
    b = color.b;
  } else {
    console.log(color + 'is undefined');
    return 'red';
  }
  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html

  // If rgba correction for a
  if (type === 'rgba') {
    if (a < 0.5) {
      hsp = 128; // if opacity < 0.5 - black
    } else {
      hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
      );
    }

  } else {
    // standard grayscale algorithmic formula ( (0.3 * R) + (0.59 * G) + (0.11 * B) )
    hsp = Math.sqrt(
      0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
    );
  }

  // Using the HSP value, determine whether the color is light or dark
  // ххх crutch ххх
  if (hsp > 127.5) {
    return 'black';
  }
  else {
    return 'white';
  }


}