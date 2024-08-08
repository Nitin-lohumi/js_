/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
  let excution;
  return function(...args) { 
      clearTimeout(excution);
      excution=setTimeout(()=>fn(...args),t);
  }
};
 const log = debounce(console.log, 1000);
  console.log(log(1));
  console.log(log(2));


