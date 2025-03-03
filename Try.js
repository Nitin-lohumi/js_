var pivotArray = function (nums, pivot) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
     if(nums[i]<pivot){
        res.push(nums[i]);
     }
  }
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]==pivot){
        res.push(pivot);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if(nums[i]>pivot){
        res.push(nums[i]);
    }
  }
  return res;
};
console.log(pivotArray([9, 12, 5, 10, 14, 3, 10], 10));
