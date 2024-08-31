var isSubsequence = function (s, t) {
  let arr = [];
  // let k =0;
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < t.length; j++) {
      if (s[i] === t[j]) {
        arr[j] = t[j];
        console.log(t[j]);
        // arr.push(t[j]);
        break;
      }
    }
  } 
  console.log(arr);
  let newstring ="";
  // console.log(arr.filter((v) => v !="").join('').toLowerCase());
   new Set(arr.filter((v) => v !="").join('').toLowerCase()).forEach((v)=>{
    newstring = newstring + v;
   });
   console.log(newstring);
   console.log(s);
  if (s.toLowerCase().match(newstring)) {
    return true;
  }
  return false;
};
let s = "acb",t = "ahbgdc";
console.log(isSubsequence(s, t));
