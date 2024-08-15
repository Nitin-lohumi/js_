var flat = function (arr) {
     let newarray = [];
    //  if(n==0){
    //     return arr;
    //  }
     for(let i=0; i<arr.length; i++){
         if(typeof(arr[i])=='object'){
           newarray.push(...flat(arr[i]));
         }else{
            newarray.push(arr[i]);
         }
     }
     return newarray;
};
arr = [1,2,3,4,5,[4,5,67,7,88,9],[1,2,3,5,6,7,[8,2,3,45,6,7],345,6,7,8,9]];

console.log(flat(arr));