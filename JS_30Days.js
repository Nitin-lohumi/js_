var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) {
    ransomNote = ransomNote.replace(char, "");
  }
  return !ransomNote ? true : false;
};
let ransomNote = "aab",
  magazine = "baa";
console.log(canConstruct(ransomNote, magazine));
