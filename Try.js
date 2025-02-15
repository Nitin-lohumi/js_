var isPowerOfFour = function (n) {
  if (n == 1) {
    return true;
  }
  if(n==0){
    return false;
  }
  n = n/4;
  return isPowerOfFour(n);
};
console.log(isPowerOfFour(6));
