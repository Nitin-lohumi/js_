var singleNumber = function(nums) {
    let a= nums.sort((a,b)=>a-b);
 
     for(let i=0;i<a.length;i+=2){
         if(a[i]!==a[i+1])
            return a[i];   
    }
 }
console.log(singleNumber([4,1,2,1,2]));

//1,1,2,2,4