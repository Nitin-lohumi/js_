var threeSum = function (nums) {
 let arr =[];
 let numbers = nums.sort((a,b)=>a-b);
 for(let i =0; i<numbers.length; i++){
  if(i>0 && numbers[i]===numbers[i-1]){
    continue;
  }
  let j = i+1;
  let k = numbers.length-1;
  while(j<k){
    let total = numbers[i]+ numbers[j]+ numbers[k];
    if(total>0){
      k--;
    }
    else if(total<0){
      j++;
    }
    else{
      arr.push([numbers[i],numbers[j],numbers[k]]);
      j++;
      while(numbers[j]=== numbers[j-1] && j<k){
        j++;
      }
    }

  }
 }
return arr;
};
console.log(threeSum([-1,0,1,2,-1,-4]));
