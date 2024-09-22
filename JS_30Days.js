var wordPattern = function(pattern, s) {
    let map = new Map()
    let map1 = new Map()
    let arr =s.split(' ');
    for (let i = 0; i < pattern.length; ++i) {
      if (map.has(pattern[i]) && arr[i] !== map.get(pattern[i])) {
          return false;
      } else {
          map.set(pattern[i],arr[i]);
      }
  }  
  for (let i = 0; i < arr.length; ++i) {
    if (map1.has(arr[i]) && pattern[i] !== map1.get(arr[i])) {
        return false;
    } else {
        map1.set(arr[i],pattern[i]);
    }
}
   return true
};    
let pattern = "abba", s ="dog dog dog dog"
console.log(wordPattern(pattern,s));