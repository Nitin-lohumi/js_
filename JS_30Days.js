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
      add(elements){
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
              return console.log("this is overflow or under flow sitution");
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
      printList(list) {
          while (list) {
              console.log(list.elements)
              list = list.next;
          }
      }
      reverse(){
        let temp = this.head;
        let prev = null;
        let point;
        while(temp){
            point= temp.next;
            temp.next = prev;
            prev = temp;
            temp = point;
        }
      }
  }
  let linklist = new linkedlist();
   linklist.add(20);
  linklist.add(10);
  linklist.reverse();
  linklist.printList(linklist.head);
  
  