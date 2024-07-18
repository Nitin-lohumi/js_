class Node {
  constructor(elements){
    this.elements =elements;
    this.next = null;
  }
}
class linkedlist {
    constructor(){
        this.head = null;
        this.size =0;
    }
    createlinkedlist(elements){
        let node = new Node(elements);
        let current;
        if(this.head==null){
            this.head = node;
        }
        else{
            current = this.head;
            while(this.current){
               current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insertAt(elements,index){
        if(index<0||index>this.size){
            return "this is overflow or under flow sitution";
        }
        else{
            let node  = new Node(elements);
            let cur , prev;
            cur = this.head;
            if(index===0){
                node.next =this.head;
                this.head = node;
            }
            else{
                cur= this.head;
                let i=0;
                while(i<index){
                 i++;
                 prev= cur;
                 cur = cur.next;
                }
                node.next = cur;
                prev.next = node;
            }
            this.size++;
        }
    }
    remove(index){
        if(index<0||index>this.size){
            return console.log("this is not valid postions");
        }
        else{
            let prev, curr,i=0;
            curr = this.head;
            prev = curr;
            if(index==0){
                this.head = curr.next;
            }
            else{
                while(i<index){
                   i++;
                   prev = curr;
                   curr= curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.elements;
        }
      
    }
    printList() {
        var curr = this.head;
        console.log(curr.elements);
        console.log(curr.next.elements);
    
    }
}
let linklist = new linkedlist();
linklist.createlinkedlist(10);
linklist.createlinkedlist(20);
linklist.insertAt(100,1);
linklist.remove(0);
console.log(linklist.printList());

