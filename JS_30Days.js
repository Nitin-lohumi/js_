var chunk = function(arr, size) {
  let arrchunk = [];
    for(let i=0; i<arr.length; i = i+size){
     arrchunk.push(arr.slice(i,i+size));
    }
    return arrchunk;
};
let arr =[1,2,3,4,5];
let size =2;
chunk(arr,size);