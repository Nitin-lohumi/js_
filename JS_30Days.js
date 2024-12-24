class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

deleteDuplicates = function (head) {
    if (head == null) {
      return head;
    } else {
      let temp = head.next;
      let prev = head;
      while (temp != null) {
        if (prev.element === temp.element) {
          prev.next = temp.next;
        } else {
          prev = temp;
        }
        temp = temp.next;
      }
      return head;
    }
  };
  printList() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }
}
const list = new LinkedList();
list.add(1);
list.add(1);
list.add(1);
// list.add(3);
// list.add(3);
console.log(list.deleteDuplicates(list.head));
list.printList();
