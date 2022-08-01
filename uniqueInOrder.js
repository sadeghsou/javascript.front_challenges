const uniqueInOrder = (iterable) => {
  const lazyIterable = Array.isArray(iterable) ? iterable : iterable.split("");
  const result = [];
  lazyIterable.forEach((char, index) => {
    if (char !== iterable[index + 1]) result.push(char);
  });
  return result;
};

console.log(uniqueInOrder([1, 2, 2, 3, 3]));
console.log(uniqueInOrder("ABBCcAD"));
