class Queue{
    constructor(){
        this.arr =[];
        this.front =0;
        this.rare =0;
    }
    add(data){
        this.arr[this.rare] = data;
        this.rare++;
        console.log("the item is inserted");
    }
    delete(){
        const data = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        console.log(data+ " is deleted");
    }
    isempty(){
        if(this.rare==0){
             return console.log("this queue is empty");
        }
        else{
            return console.log("this queue is not empty");
        }
    }
    print(){
         for(let i=this.front; i<this.rare; i++){
            console.log(this.arr[i]);
         }
    }
}
let q = new Queue();
q.add(7);
q.add(2);
q.add(6);
q.add(4);
q.delete();
q.delete();
console.log(q.isempty());

q.print();

