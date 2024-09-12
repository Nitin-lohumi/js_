var longestPalindrome = function(s) {
  let string = s;
  let value= 0;
  let palindrom = "";
  for(let i = 0; i < string.length; i++){
      for(let j = 0; j <= 1; j++){
          let left = i;
          let right = i + j;
          while(left >= 0 && right < string.length && s[left] === s[right]){
              let len = right - left + 1;
              if(len > value){
                palindrom = s.substring(left, right + 1);
                  value = len;
              }
              left--;
              right++;
          }
      }
  }
  return palindrom;
};
let s = "babad";
console.log(longestPalindrome(s));