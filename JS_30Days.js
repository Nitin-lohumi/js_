var twoSum = function(numbers, target) {
  let index =0;
  let length = numbers.length-1;
  while(index<length){
   if(numbers[index]+numbers[length]==target){
    return [index+1,length+1];
   }
   //beacuse they are in non-decreasing order;
   else if(numbers[index]+numbers[length]<target){
     index++;
   }
   else{
    length--;
   }
  }   
  return [];
};
let numbers =[-10,-8,-2,1,2,5,6], target = 0;
console.log(twoSum(numbers, target));
