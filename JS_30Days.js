class RandomizedSet {
   constructor() {
      this.arr =[];
   
   }
   insert(val) {
    for(let i=0;i<this.arr.length; i++){
      if(this.arr[i]===val){
         return false;
      }
    }
     this.arr.push(val);
     this.map.set(val,this.arr.length-1);
     return true;
   }
   remove(val) {
      if(this.arr.length==0){
         return false;
      }
      for(let i=0;i<=this.arr.length; i++){
         if (this.arr[i]==val) {
            this.arr.splice(i, 1);
            this.map.delete(val);
            return true;
          }
        }
     return false;
   }

   getRandom = function() {
      let randomnumber = this.arr[Math.floor(Math.random() * this.arr.length)];
      return randomnumber;
   };
}
let random = new RandomizedSet();
console.log(random.arr);
console.log(random.insert(3));
console.log(random.insert(120));
console.log(random.remove(3));
console.log(random.map);


