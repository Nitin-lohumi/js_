var reverse = function(x) {
const MAX_INT = 2**31-1
const MIN_INT = -(2**31);
let reverse =0;
const sign = x<0?-1:1;
x = Math.abs(x)
reverse = parseInt(x.toString().split('').reverse().join(''));
reverse =reverse*sign;
if(reverse<MIN_INT||reverse>MAX_INT){
  return 0;
}
return reverse;
};
console.log(reverse(1534236469))