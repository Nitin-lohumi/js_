var divide = function(dividend, divisor) {
  if(dividend== -2147483648 &&divisor==-1) return  -2147483648 ;
  let quosient = 0;
  let ispositive =1;
  if(dividend<0){
    ispositive =-1;
    dividend = -dividend;
  }
  if(divisor<0){
    ispositive =-1;
    divisor =-divisor;
  }

  if(dividend==divisor) return ispositive;

  for(let i = 0, val = divisor; dividend >= divisor; i = 0, val = divisor){
    while (val > 0 && val <= dividend) val = divisor << ++i;
    dividend -= divisor << (i - 1);
    quosient += 1 << (i - 1);
  }
  return ispositive < 0 ? -quosient : quosient;
};
console.log(divide(10,-3));