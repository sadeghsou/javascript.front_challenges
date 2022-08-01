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
console.log(scarmble("scriptjava", "javascript"));
console.log(scarmble("scriptingjava", "javascript"));
console.log(scarmble("scriptsjava", "javascripts"));
console.log(scarmble("jscripts", "javascript"));
