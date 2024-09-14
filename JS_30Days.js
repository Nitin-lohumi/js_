var isIsomorphic = function (s, t) {
  let map1 = [];
  let map2 = [];
  if(s.length!==t.length) return false
  for (let c = 0; c < s.length; c++) {
   if(map1[s.charAt(c)]!=map2[t.charAt(c)]){
    console.log(map1)
    console.log(map2)
    return false;
   }
   map1[s.charAt(c)] = c+1;
   map2[t.charAt(c)] = c+1;
  }
   return true
};
let s = "add", t = "eag";
console.log(isIsomorphic(s, t));
