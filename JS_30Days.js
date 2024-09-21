class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    let newnode = new Node(data);
    if (this.head === null) {
      this.head = newnode;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newnode;
  }
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  delete(data){
    if(this.head.data==data){
        this.head =  this.head.next;
        return;
    }else{
        let temp = this.head;
        while(temp.next){
            if(data===temp.next.data){
             temp.next = temp.next.next;
             return;
            }
            temp = temp.next;
        }
    }
  }
}

let ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
ll.insert(60);

ll.delete(60);

ll.printList();
