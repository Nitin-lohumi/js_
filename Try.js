var countKDifference = function(nums, k) {
  const obj ={};
  let count =0;
  for(let n of nums){
    if(obj[n-k]){
      count=count+obj[n-k];
    }
    if(obj[n+k]){
      count=count+obj[n+k];
    }
    obj[n]= ((obj[n]||0)+1);
    console.log(obj)
  }
   return count;
};
console.log(countKDifference([1,2,2,1],1))//2-1=1