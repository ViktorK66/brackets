module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  const lengthConfig = bracketsConfig.length;
  for (let i = 0; i < str.length; i++) {
    for (let f = 0; f < lengthConfig; f++) {
      if (bracketsConfig[f].includes(str[i])) {
        if (str[i] == bracketsConfig[f][1] && brackets[brackets.length - 1] == bracketsConfig[f][0]) {
          brackets.pop();
        } else {
          brackets.push(str[i]);
        }
      }
    }
  }
  if (!brackets.length) {
    return true;
  }
  return false;
}
