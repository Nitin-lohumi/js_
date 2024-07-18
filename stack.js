class stack {
    constructor() {
        this.arr =[];
    }
    push(elements){
         this.arr.push(elements);
    }
    pop(){
        if(this.arr.length==0){
            return "underflow";

        }
        console.log("item is poped");
      return  this.arr.pop();
    }
    peek(){
        return this.arr[this.arr.length-1];
    }
    printStack()
    {
        let str = "";
        for (let i = this.arr.length-1; i>=0; i--)
            str += this.arr[i] + " ";
        return str;
    }
    
}
let a = new stack();
a.push(10);
a.push(20);
a.push(30);
a.pop();
console.log(a.peek());

console.log(a.printStack());
