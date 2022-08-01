const isDivisible = (n, x, y) => {
  const dX = n % x;
  const dY = n % y;
  return dX === 0 && dY === 0;
};
console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
