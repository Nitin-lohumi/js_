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
   DeleteNode(node,data){
       if(node==null){
        return null
       }
       if(node.data<data){
        node.left =this.DeleteNode(node.left,data);
       }
       else if(node.data>data){
        node.right=  this.DeleteNode(node.right,data);
       }
       else{
        if(node.left==null&&node.right==null){
          return null;
        }
        if(node.left==null){
          return node.right;
        }
        else if(node.right==null){
          return node.left;
        }
        const sucesser = this.FindSmallestNode(node.right);
        node.data = sucesser;
        node.right = this.DeleteNode(node.right,sucesser);  
       }
       return node;
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
  FindSmallestNode(node) {
    while (node && node.left !== null) {
        node = node.left;
    }
    return node;
}
  findLargest(node = this.root){
    if(this.root == null){
      return null;
    }
    while(node.right!==null){
      node = node.right;
    }
    return node.data;
  }
}
let tree = new BinaryTree();
tree.insert(40);
tree.insert(20);
tree.insert(10)

console.log("this is the smallest node "+ tree.FindSmallestNode());
console.log("this is the largest node "+ tree.findLargest());
tree.inorder();

tree.root = tree.DeleteNode(tree.root,40);

console.log("this is the after delete node ");
tree.preorder(tree.root);
// console.log(tree.root)