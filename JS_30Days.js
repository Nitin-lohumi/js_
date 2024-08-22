
var candy = function(rate) {
  let candy = new Array(rate.length).fill(1);
  for (let i = 1; i < rate.length; i++) {
   if(rate[i]>rate[i-1]){
     candy[i] = candy[i-1]+1;
   }     
  }
  for(let i =rate.length-2; i>=0; i--){
   if(rate[i]>rate[i+1]){
     candy[i] = Math.max(candy[i],candy[i+1]);
   }
  }
  return candy.reduce((i,j)=>i+j,0);
};
console.log(candy([1,2,2]));