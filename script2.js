function createArray(sample) {
  const array = [];

  sample.forEach((element) => {
    if (element % 2 === 0) {
      if (element % 13 === 0) {
        element = element - 5;
      }
      element = element * 2;
      array.push(element);
    } else {
      if (element % 13 === 0) {
        element = element - 5;
      }
      element = element / 2;
      array.push(element);
    }
  })

  console.log(array);
}

createArray([1, 2, 13, 26, 1]);