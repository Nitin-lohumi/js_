class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Insert at the end
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Insert at the beginning
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Delete a node by value
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      if (!current.next) {
        this.tail = current; // Update tail if last node is removed
      }
      this.length--;
    }
  }

  // Print the list
  print(head) {
    let current = head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
  deleteDuplicates() {
    let temp = this.head;
    let prev = temp;
    let curr = this.head.next;
    while (curr.next != null) {
      while (curr.value == curr.next.value && curr.next != null) {
        curr = curr.next;
      }
      if (prev.next == curr) {
        prev = prev.next;
      } else {
        prev.next = curr.next;
      }
      curr = curr.next;
    }
    return temp.next;
  }

  sortList() {
   let temp = this.head;
   
  };
}

const list = new SinglyLinkedList();
list.append(0);
list.append(4);
list.append(2);
list.append(1);
list.append(3);
const head = list.sortList();
list.print(head);
