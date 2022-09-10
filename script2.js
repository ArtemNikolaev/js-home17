function createArray(sample) {
  const array = [];

  sample.forEach((element) => {
    if (element % 13 === 0) {
      element = element - 5;

      if (element % 2 !== 0) {
        let value = element * 2;
        array.push(value);
      } else {
        value = element / 2;
        array.push(value);
      }

    return;
    }

    if (element % 2 === 0) {
      let value = element * 2;
      array.push(value);
    } else {
      value = element / 2;
      array.push(value);
    }
  })

  console.log(array);
}

createArray([1, 2, 13, 26, 1]);