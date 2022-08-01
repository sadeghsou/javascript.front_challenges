const isDivisible = (n, x, y) => {
  const dX = n % x;
  const dY = n % y;
  return dX === 0 && dY === 0;
};

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

const uniqueInOrder = (iterable) => {
  const lazyIterable = Array.isArray(iterable) ? iterable : iterable.split("");
  const result = [];
  lazyIterable.forEach((char, index) => {
    if (char !== iterable[index + 1]) result.push(char);
  });
  return result;
};

const scarmble = (str1, str2) => {
  if (str1.length < str2.length) return false;
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  arr2.forEach((char) => {
    if (!arr1.includes(char)) return false;
    arr2.splice(arr2.indexOf(char), 1);
    arr1.splice(arr1.indexOf(char), 1);
  });
  return true;
};

const count = (string) => {
  const result = {};
  string.split("").forEach((char) => {
    !!result[char] ? result[char]++ : (result[char] = 1);
  });
  return result;
};
