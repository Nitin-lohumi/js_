var wordSubsets = function(words1, words2) {
   const targetFreq = new Array(26).fill(0);
   for (const word of words2) {
     const freq = new Array(26).fill(0);

     for (const char of word) {
       freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
     }
     
     for (let i = 0; i < 26; i++) {
       targetFreq[i] = Math.max(targetFreq[i], freq[i]);
     }
   }
   const result = [];
   for (const word of words1) {
     const freq = new Array(26).fill(0);
     for (const char of word) {
       freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
     }
     let isUniversal = true;
     for (let i = 0; i < 26; i++) {
       if (freq[i] < targetFreq[i]) {
         isUniversal = false;
         break;
       }
     }
     if (isUniversal) {
       result.push(word);
     }
   }
 
   return result;
 };
 
 console.log(
   wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"])
 );