// INDEX OF
function checkNumerationEnd(str) {
  console.log(str.toLowerCase().lastIndexOf('lorem ipsum'));
}

checkNumerationEnd('lorem ipsum bla Lorem ipsum fhsr');


// SPLIT
function checkWithSplitEnd(str, separator) {
  let strArr = str.toLowerCase().split(separator);

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === 'lorem' && strArr[i + 1] === 'ipsum') {
      strArr[i] = strArr[i] + ' ' + strArr[i + 1];
    }
  }

  strArr = strArr.filter(function (f) { return f !== 'ipsum' });
  console.log(strArr.lastIndexOf('lorem ipsum'));
}

checkWithSplitEnd('fewb LOREM ipsum wefbiwl gd fwenijfnw lorem ipsum fwn fw', ' ');