var twoSum = function (numbers, target) {
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
  return 0;
};
let numbers =[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1],
target = 2;
console.log(twoSum(numbers, target));

// let count = 1;
// for(let number in numbers){
//   let index =count;
//   while(index!=numbers.length){
//     if(number+numbers[index]===target){
//        return [Number(numbers.indexOf(number))+1,index+1];
//     }
//     index++;
//   }
//   count++;
// }
