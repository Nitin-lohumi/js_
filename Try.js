class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class Bt {
  constructor() {
    this.root = null;
  }
  insert(data) {
    let node = new Node(data);
    if (this.root === null) {
      this.root = node;
    } else {
      const search = (node) => {
        if (data < node.val && node.left) {
          search(node.left);
        } else if (data < node.val) {
          node.left = new Node(data);
        } else if (data > node.val && node.right) {
          search(node.right);
        } else if (data > node.val) {
          node.right = new Node(data);
        }
      };
      return search(node);
    }
  }
  find(data) {
    if (this.root == null) {
      return false;
    }
    let node = this.root;
    let found = false;
    while (node && !found) {
      if (data > node.val) {
        node = node.right;
      } else if (data < node.val) {
        node = node.left;
      } else {
        found = node;
      }
    }
    return found ? true : false;
  }
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.val);
      this.inorder(node.right);
    }
  }
}
let tree = new Bt();
tree.insert(10);
tree.insert(20);
tree.insert(30);
tree.insert(40);
tree.insert(50);
tree.insert(1);
tree.inorder(tree.root);
