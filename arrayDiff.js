const arrayDiff = (a, b) => {
  const maxArr = [];
  const minArr = [];
  if (a.length > b.length) {
    maxArr.push(...a);
    minArr.push(...b);
  } else {
    maxArr.push(...b);
    minArr.push(...a);
  }
  const diffs = [];
  maxArr.forEach((item) => {
    if (!minArr.includes(item)) diffs.push(item);
  });

  return diffs;
};
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 3], [1, 2]));
