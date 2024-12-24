var letterCombinations = function (digits) {
  const keypad = new Map([
    ["2", "abc"],
    ["3", "def"],
    ["4", "ghi"],
    ["5", "jkl"],
    ["6", "mno"],
    ["7", "pqrs"],
    ["8", "tuv"],
    ["9", "wxyz"],
  ]);
  const combinate = [];
  const arr = digits.split("");
  arr.map((v) => {
    if (keypad.has(v)) {
      combinate.push(keypad.get(v));
    }
  });
  return combine(combinate);
};

function combine(group) {
  if(group.length<=1) return group.join("").split("");
  const first_group = group[0];
  const restgroup = combine(group.slice(1));
  let store = [];
  for (let char of first_group) {
    for (let rest of restgroup) {
      store.push(char + rest);
    }
  }
  console.log(store.length);
  return store;
}

console.log(letterCombinations("3"));
