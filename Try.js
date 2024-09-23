class Node {
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree{
  constructor() {
    this.root = null;
  }
  insert(data){
    const newnode = new Node(data);
    if(this.root===null){
      this.root = newnode;
    }else{
      this.insert_node(this.root,newnode);
    }
  }
  insert_node(node,newnode){
    if(newnode.data<node.data){
      if(node.left==null){
        node.left = newnode;
      }else{
        this.insert_node(node.left,newnode);
      }
    }
    else{
      if(node.right==null){
        node.right = newnode;
      }else{
        this.insert_node(node.right,newnode);
      }
    }
  }
  inorder(node = this.root) {
    let arr = [];
     function inorderfun(root){
      if(!root){
        return;
      }
      inorderfun(root.left);
      arr.push(root.data);
      inorderfun(root.right);
     }
     inorderfun(node)
     console.log(arr)
  }

  preorder(node = this.root) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  postorder(node = this.root) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
}
let tree = new BinaryTree();
tree.insert(40);
tree.insert(20);
tree.insert(60);
console.log("this is Inorder");
tree.inorder();
console.log("this is preorder");
tree.preorder();
console.log("this is postoreder");
tree.postorder()