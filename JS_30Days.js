let nums = [1,1,2];
var removeDuplicates = function (nums) {
  let index = 1;
  for (let i = 1; i < nums.length; i++) {
    if(nums[i]!==nums[i-1]){
        nums[index] = nums[i];
        index++;
        nums.pop();
    }
  }
  console.log(nums);
  return index;
};
console.log(removeDuplicates(nums));
