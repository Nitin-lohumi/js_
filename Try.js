var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let res = 0;
  let Str =s;
  for (let i = 0; i < s.length; i++) {
    let index = Str.indexOf(t[i]); 
    if(index!=-1){
     if(s.includes(t[i])){
      res++;
      Str =Str.replace(t[i],"");
      // console.log(Str);
     }
    }
  }
  // console.log(res)
  // console.log(s.length)
  return res == s.length;
};
console.log(isAnagram("anagram", "nagaram"));
