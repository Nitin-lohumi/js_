class Queue {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rare = 0;
  }
  add(data) {
    this.arr[this.rare] = data;
    this.rare++;
    console.log("the item is inserted");
  }
  delete() {
    const data = this.arr[this.front];
    delete this.arr[this.front];
    this.front++;
  }
  isempty() {
    if (this.rare == 0) {
      return true;
    } else {
      return false;
    }
  }
  print() {
    for (let i = this.front; i < this.rare; i++) {
      console.log(this.arr[i]);
    }
  }
}
// q.add(7);
// q.add(2);
// q.add(6);
// q.add(4);
// q.delete();
// q.delete();
// console.log(q.isempty());

// q.print();

var levelOrder = function (root) {
  let q = new Queue();
  let arr = [];
  q.add(root);
  let i = 1;
  arr[0] = [root];
  while (!q.isempty()) {
    arr[i] = [];
    let currnode = q.delete();
    if (currnode != null) {
      if (currnode.left) {
        arr[i].push(currnode.left.val);
        q.add(currnode.left);
      }
      if (currnode.right) {
        arr[i].push(currnode.right.val);
        q.add(currnode.right);
      }
    }
    i++;
  }
  console.log(arr);
};
console.log(levelOrder([3, 9, 20, null, null, 15, 7]));
