function resolved(result){
  console.log(result);
}                           
function rejected(result){
     console.error("");
}             
Promise.reject(new Error('fail')).then(resolved,rejected);
Promise.resolve("successs").then(resolved,rejected);