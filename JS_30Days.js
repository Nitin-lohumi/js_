class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
class Linkedlist {
  constructor() {
     this.head = null;
  }
  createLinklist(data){
    let newnode = new Node(data);
    return newnode;
  }
  add(data){
    if(this.head==null){
      this.head = this.createLinklist(data);
    }
    else{
      let current = this.head;
       let newnode = new Node(data);
       while(current.next!=null){
        current = current.next;
       }
       current.next = newnode;   
      }
  }
  removeFromlast(){
    if(this.head==null){
      console.log("linked list is underflow");
      return; 
    }
    else{
      let current = this.head;
      let temp;
      while(current.next!=null){
         temp = current;
         current = current.next;
      }
      temp.next = null;
    }
  }
  display(){
    let current = this.head;
    while(current!=null){
      console.log(current.data);
      current=current.next;
    }
  }
  isPallindrom(){
    let current = this.head;
    let string ="";
    while(current!=null){
       string += current.data;
      current = current.next;
    }
    const strRev =  [...string].reverse().join("");
    if(string.match(strRev)){
      return true;
    }else{
      return false;
    }
  }
}
let ll = new Linkedlist();
ll.add(1)
ll.add(2)
ll.add(2);
ll.add(100);
console.log(ll.isPallindrom());
ll.display();

