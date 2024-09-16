var isHappy = function(n) {
  if(n==1||n==7){
    return true;
  }
  while(n>9){
    let arr = n.toString().split("").map(Number);
    let pow = arr.map((num)=>{
      return Math.pow(num,2);
    })
    n = pow.reduce((pre,curr)=>{
      return pre+curr;
    }, 0);
    if(n==1||n==7){
      return true;
    }
  }
  return false;
};
let n = 2;
console.log(isHappy(n));