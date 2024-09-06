var canConstruct = function(ransomNote, magazine) {
  let map = {};
  let i= 0;
  let count =0;
  if(ransomNote.length>magazine.length){
    return false;
  }
  while(i<magazine.length){
    map[ransomNote[i]] = i;
    console.log(map);
    if(map.hasOwnProperty(magazine[i])){
      count ++;
      delete map[ransomNote[i]];
    }
    console.log(" after map ",map)
     i++;
  }
  console.log(count);
  return count === ransomNote.length;
};let ransomNote = "aab", magazine = "baa";
console.log(canConstruct(ransomNote,magazine));