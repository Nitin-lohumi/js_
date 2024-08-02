let arr=[1,2,3];
function plusone(n,i){
    if(i){
        return n+i;
    }
    if(n){
        return n+1;
    }

}

var map = function(arr, fn) {
    let returnedArray=new Array();
    arr.forEach((element,index) => {
        returnedArray[index] = fn(arr[index]);
        console.log(returnedArray[index]);
    });
};
map(arr,plusone);