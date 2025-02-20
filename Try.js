var searchMatrix = function (matrix, target) {
  let arr = matrix.flat();
  function binarysearch(arr, target,left,right) {
    if(left>right){
      return false;
    }
    let mid =Math.floor(left + (right - left) / 2);
    if(arr[mid]===target){
      return true;
    }
    else if(arr[mid]<target){
      return binarysearch(arr,target,mid+1,right);
    }
    else if(arr[mid]>target){
      return binarysearch(arr,target,left,mid-1);
    }
    return false;
  }
  return binarysearch(arr,target,0,arr.length-1);
};
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    20
  )
);
