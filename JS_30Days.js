var isEmpty = function(obj) {
  let object = Object.keys(obj);
  if(object.length>0){
    return false;
  }
  return true;
};

console.log(isEmpty([null, false, 0]));