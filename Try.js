var compress = function (chars) {
  if(chars.length ==0){
    return chars;
  }
  let str1 ="";
  let i=0;
  while (i<chars.length) {
    let char = chars[i];
    let c =0;
    while (i < chars.length && chars[i] === char) {
      i++;
      c++;
    }
    if(c>1){
      str1 = str1+char+c;
    }else{
      str1 =str1+char; 
    }
  }
  chars.length = 0;
  chars.push(...str1.split(""));
  return str1.length;
};
let chars =["a"];
console.log(compress(chars)); 
console.log(chars); 
