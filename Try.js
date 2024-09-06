var minSubArrayLen = function (target, nums) {
  nums.sort();
  let istrue = false;
  for (let i of nums) {
    if (i === target) {
      istrue = true;
      return 1;
    }
  }
  let k =0;
  let sum =0;
  let min =Infinity;
  if (!istrue) {
    let i = 0;
    let j = nums.length;
    while (i < j) {
     sum = sum + nums[i];
     while(sum>=target){
      min  = Math.min(min,(i-k+1));
      sum = sum-nums[k];
      k++;
     }
     i++;
    }
  }
  return min ==Infinity?0:min;
};
console.log(minSubArrayLen(11, [1,2,3,4,5]));
