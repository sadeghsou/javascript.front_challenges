const count = (string) => {
  const result = {};
  string.split("").forEach((char) => {
    !!result[char] ? result[char]++ : (result[char] = 1);
  });
  return result;
};
console.log(count(""));
console.log(count("aba"));
