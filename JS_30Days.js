var canCompleteCircuit = function(gas, cost) {
   let curTank = 0, totalTank = 0, pos= 0;
   for (let i=0;i<gas.length;i++) {
       curTank+= gas[i] - cost[i];
       totalTank+= gas[i] - cost[i];
       if (curTank<0) {
           curTank = 0;
           pos = i+1;
       }
   }   
   return totalTank<0?-1:pos;
};
let gas = [2,3,4]
let cost = [3,4,3]
console.log(canCompleteCircuit(gas,cost));

const rotateArray1 = function(gas, ) {

   for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop());
   }
 
   return nums;
 }
 