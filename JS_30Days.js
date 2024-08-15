
const pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
}
var isValid = function(s) {
    let stack =[];
    if (s.lengt%2===1) {
        return false;
    }
    if (s[0]==="]"||s[0]===")"||s[0]==="}") 
      {
        return false;
      }
    if (s[s.length-1]==="["||s[s.length-1]==="("||s[s.length-1]==="{"){
        return false;
    } 
    for(let i=0; i<s.length; i++){
        if(s[i]=='('||s[i]=='{'||s[i]=='['){
            stack.push(s[i]);
        }
        else if (pairs[stack.pop()] !== s[i]) {
            return false;
        }
        else{
            return true;
        }
    }
    return;
};
let s = "([)]";
console.log(isValid(s));