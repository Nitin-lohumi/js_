class TimeLimitedCache {
  constructor() {
    this.cache = {};
    setTimeout(()=>{
       console.log("after five seconds the object is empty");
       console.log(this.cache);
    },5000);
  }
  set(key, value, duration) {
   if(this.cache[key]){
    clearTimeout(this.cache[key].timer);
    this.cache[key].value =value;
    this.cache[key].timer = setTimeout(()=>{
          console.log("after the" + duration/1000 + "second the key will expire"+ this.cache[key].value);
          delete this.cache[key];
    },duration);
     return "key is set";
   }
   this.cache[key] ={
    value:value,
    timer:setTimeout(()=>{
        console.log("this is a new key genrated for " + duration/1000 + "second" + this.cache[key].value);
        delete this.cache[key];
    },duration)
   };
   return "new key";
  }

  get(key) {
    if (this.cache[key] && this.cache[key].timer) {
      return this.cache[key].value;
    }
    else {
      return "no key to show ";
    }
  }
  display(key){
    let status ="no";
    if(this.cache[key] && this.cache[key].timer){
        console.log(this.cache[key].value);
        status = "yess sucesss !!!";
    }
    return status;
  }
  count() {
    let ans = 0;
    for (let key in this.cache) {
      if (this.cache[key].timer) {
        ans++;
      }
    }
    return ans;
  }
}



const timeLimitedCache = new TimeLimitedCache();
console.log( timeLimitedCache.set(1, 42, 3000));
// console.log(timeLimitedCache.get(1));
console.log( timeLimitedCache.set(2, 112, 2000));
// console.log(timeLimitedCache.get(2));
console.log( timeLimitedCache.display(1));

