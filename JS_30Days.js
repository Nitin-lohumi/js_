var lengthOfLongestSubstring = function(s) {
  let count = 0;
  let maxSize =0;
  let set  = new Set();
  for (let i = 0; i < s.length; i++){
    while(set.has(s[i])){
       set.delete(s[count]);
       count++;
    }
    set.add(s[i]);
    maxSize = Math.max(maxSize,i-count+1);
  }
  return maxSize;
};
console.log(lengthOfLongestSubstring("abcabcbb"));