

function memoize(fn) {
    let cache={};
    return function(...args) {
        const key  = args;
        console.log(key);
          if(key in cache){
            return cache[key];
          }
          cache[key] = fn(...args);
          console.log(cache);
          return cache[key];

        }

}


let callCount = 0;
 const memoizedFn = memoize(function (a, b) {
    	 callCount += 1;
       return a + b;

 })
console.log(memoizedFn(2, 2)); // 5
console.log(memoizedFn(1, 2)); //5 
 console.log(callCount);

