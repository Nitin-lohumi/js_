var majorityElement = function (nums) {
  let MapNumber = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (MapNumber.has(nums[i])) {
      MapNumber.set(nums[i], MapNumber.get(nums[i]) + 1);
    } else {
      MapNumber.set(nums[i], 1);
    }
  }
  let maxNumbers = [];
  for (const [number, freq] of MapNumber.entries()) {
    if (freq > Math.floor(nums.length/3)) {
      maxNumbers.push(number);
    }
  }
  return maxNumbers;
};
console.log(majorityElement([1,2,3]));
