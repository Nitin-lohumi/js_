class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}
class AvlTree {
  constructor() {
    this.root = null;
  }
  getMini(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  height(node) {
    if (!node) return 0;
    return node.height;
  }
  getBalance(node) {
    if (node == null) return 0;
    return this.height(node.left) - this.height(node.right);
  }
  LeftRotate(x) {
    const y = x.right;
    const temp = x.left;

    y.left = x;
    x.right = temp;
    x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
    return y;
  }

  RightRotate(y) {
    const x = y.left;
    const temp = y.right;

    x.right = y;
    y.left = temp;
    x.height = 1 + Math.max(this.height(x.left), this.height(x.right));
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
    return x;
  }
  insert(node, value) {
    if (node === null) {
      return new Node(value);
    }

    if (value < node.data) {
      node.left = this.insert(node.left, value);
    } else if (value > node.data) {
      node.right = this.insert(node.right, value);
    } else {
      return node; 
    }

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    const balance = this.getBalance(node);

    if (balance > 1 && value < node.left.data) {
      return this.LeftRotate(node);
    }
    if (balance < -1 && value > node.right.data) {
      return this.LeftRotate(node);
    }
    if (balance > 1 && value > node.left.data) {
      node.left = this.LeftRotate(node.left);
      return this.RightRotate(node);
    }
    if (balance < -1 && value < node.right.data) {
      node.right = this.RightRotate(node.right);
      return this.LeftRotate(node);
    }
    return node;
  }


  deleteNode(node, data) {
    if (node == null) {
      return node;
    }

    if (data < node.data) {
      node.left = this.deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.deleteNode(node.right, data);
    } else {
      if (node.left == null) {
        return node.right;
      } else if (node.right == null) {
        return node.left;
      }

      const sucesser = this.getMini(node.right);
      node.data = sucesser;
      node.right = this.deleteNode(node.right, sucesser);
    }

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));

    const balance = this.getBalance(node);

    if (balance > 1 && this.getBalance(node.left) >= 0) {
      return this.RightRotate(node);
    }
    if (balance > 1 && this.balancingFactor(node.left) < 0) {
      node.left = this.leftRotaion(node);
      return this.rightRoation(node);
    }
    if (balance < -1 && this.balancingFactor(node.right) <= 0) {
      return this.rightRoation(node);
    }
    if (balance < -1 && this.balancingFactor(node.right) < 0) {
      node.right = this.rightRoation(node);
      return this.leftRotaion(node);
    }
    return node;
  }
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  DataInsert(data){
    this.root = this.insert(this.root,data);
  }
  DeleteData(data){
    this.root = this.deleteNode(this.root,data);
  }
  display() {
    this.inOrder(this.root);
  }
}


let a = new AvlTree();
a.DataInsert(60);
a.DataInsert(50);
a.DataInsert(70);
a.DataInsert(40);
a.DataInsert(45);
a.DataInsert(10)
console.log(a.root);
a.display();