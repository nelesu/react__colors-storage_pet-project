export default (value) => {
  if (value.length > 3) {
    console.log("There should be only three characters");
    return value.slice(0, 3);
  } else if (value <= 255 && value >= 0) {
    console.log('Correct part');
    return value;
  } else if (value < 0) {
    console.log('Must be greater than 0 or equal to 0');
    return 0;
  } else if (value > 255) {
    console.log('Must be less than 255');
    return 255;
  } else {
    console.log('Something went wrong')
    return 0;
  }
};