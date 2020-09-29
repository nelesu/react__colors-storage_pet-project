function convertRGBAtoHEX(channels) {
  const hexChannels = channels.map(entry => (`0${entry.toString(16)}`).slice(-2));
  console.log(channels);
  return (`${hexChannels.join('')}`);
}

export default (raw) => {
  console.log(raw, 'rgbato hex');
  let channels = raw.map((entry, index) => {
    const number = parseFloat(entry, 10);
    return (index === 3) ? Math.floor(number * 255) : number;
  });

  return convertRGBAtoHEX(channels);
}
