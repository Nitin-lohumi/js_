var checkIfInstanceOf = function(obj, classFunction) {
//     while (obj!=null) {
//       console.log(obj.constructor);
//       console.log(classFunction);
//        if(obj.constructor==classFunction){
//             return true;
//        }
//        obj = Object.getPrototypeOf(obj);
//     }
//     return false;
      if (typeof obj !== "object" && typeof obj !== "function") {
            obj = Object(obj);
      }
console.log(obj instanceof classFunction);
};
console.log(checkIfInstanceOf(5, Number));