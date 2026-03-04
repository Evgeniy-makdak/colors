function onlyDigits(str) {
  const arrString = str.split("");
  let count = 0;
  for (let i = 0; i < arrString.length; i++) {
  const inRange = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (inRange.some((valid) => valid.toString() === arrString[i])) {
      count++;
    }
  }
  console.log(count)
  console.log(arrString.length)
  if (count === arrString.length) {
    return true;
  } else {
    return false;
  }
}

console.log(onlyDigits("1\t2"));