var majorityElement = function (nums) {
  let candidate = -1;
  let count =0;
  for (let index = 0; index < nums.length; index++) {
    if(count==0){
      candidate = nums[index];
    }
    if(nums[index]==candidate){
         count = count+1;
    }else{
        count = count-1;
    }
  }
  return candidate;
};
console.log(majorityElement([1, 2, 3,3]));
