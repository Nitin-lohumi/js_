var canConstruct = function (ransomNote, magazine) {
  for (const char of magazine) 
    {
        ransomNote = ransomNote.replace(char,"");
        console.log(ransomNote)
    }
    return !ransomNote?true:false;
};
let ransomNote = "aab", magazine = "baa";
console.log(canConstruct(ransomNote, magazine));
