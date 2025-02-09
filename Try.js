class Solution {
  constructor(nums) {
    this.nums = nums;
    this.map = new Map();
    for (let i = 0; i < this.nums.length; i++) {
      if (!this.map.has(this.nums[i])) {
        this.map.set(this.nums[i], []);
      }
      this.map.get(this.nums[i]).push(i);
    }
  }

  pick(target) {
    if (this.map.has(target)) {
      let targetIndices = this.map.get(target);
      const randomIndex = Math.floor(Math.random() * targetIndices.length);
      return targetIndices[randomIndex];
    }
    return null;
  }
}

let nums = [1, 2, 3, 3, 3];
var obj = new Solution(nums);
var param_1 = obj.pick(3);
console.log(param_1);
