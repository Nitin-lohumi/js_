Array.prototype.last = function() {
   if(!this.length) return -1;
    for(let i=0; i<this.length;i++){
       return this[this.length-1];
    }
};

  const arr = [null,{},3];
  console.log(arr.last()); // 3
 