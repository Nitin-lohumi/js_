var areOccurrencesEqual = function(s) {
   let map = new Map();  
   for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
   return new Set(map.values()).size === 1;
};
console.log(areOccurrencesEqual("abacbc"));
