var isPalindrome = function(s) {
  let arr = s.split('').filter((v)=>(v!==":")&&(v!=",")&&(v!=" ")&&(v!="~")&&(v!="!")&&(v!="@")&&(v!="#")&&(v!="$")&&(v!="%")&&(v!="^")&&(v!="&")&&(v!="*")&&(v!="(")&&(v!=")")&&(v!="-")&&(v!="+")&&(v!="=")&&(v!="|")&&(v!="}")&&(v!="{")&&(v!=";")&&(v!="]")&&(v!="[")&&(v!='"')&&(v!=";")&&(v!="'")&&(v!=">")&&(v!="<")&&(v!=".")&&(v!="?")&&(v!="/")&&(v!="_")&&(v!="`")&&(v!="\\"));
  return arr.join("").toString().toLowerCase().match(arr.reverse().join("").toString().toLowerCase())?true:false;
  };
console.log(isPalindrome("ab_a"));
