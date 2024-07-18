class stack {
    constructor() {
        this.arr =[];
    }
    push(elements){
         this.arr.push(elements);
    }
    pop(){

        if(this.arr.length==0){
            return console.log("underflow");
        }
        console.log( "the item "+ this.arr[this.arr.length-1],"deleted or poped");
      return  this.arr.pop();
    }
    peek(){
        return this.arr[this.arr.length-1];
    }
    printStack()
    {
        for (let i = this.arr.length-1; i>=0; i--)
           console.log(this.arr[i]);
    }
    
}
let a = new stack();
a.push(10);
a.push(20);
a.push(30);
a.pop();
console.log(a.peek());
a.printStack();
