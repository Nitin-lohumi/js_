class Node {
  constructor(element){
    this.data = element;
    this.next = null;
  }
}
class CricularQueue {
  constructor(){
    this.front = null;
    this.rare = null;
  }
  insert(element){
    let newnode  = new Node(element);
    if(this.front==null||this.rare==null){
     this.front = this.rare = newnode;
    }
    else{
      this.rare.next = newnode;
      this.rare = newnode;
      this.rare.next = this.front;
    }
  }
  remove(){
    if(this.front==null||this.rare==null){
      console.log(null);
     }
     else{
      this.front= this.front.next;
      this.rare.next = this.front;    
     }
  }
  display(){
    var temp=this.front
    do
    {
      console.log(temp.data)
      temp=temp.next
    }while(temp!=this.front)
  }
}

let n = new CricularQueue();
n.insert(10);
n.insert(20);
n.insert(30);
n.insert(40);
n.insert(50);
n.insert(60);
n.insert(70);
n.remove();
n.display();