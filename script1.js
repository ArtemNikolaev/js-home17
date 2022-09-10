// INDEX OF
function checkNumeration(str) {
  console.log(str.toLowerCase().indexOf('lorem'));
}

checkNumeration('0123lorEMgksrhrtlorem')


// SPLIT
function checkWithSplit(str, separator) {
  console.log(str.toLowerCase().split(separator).indexOf('lorem'));
}

checkWithSplit('fewb fv LOREM wefbiwl fwenijfnw lorem fwn fw', ' ');