const readline = require("readline");
class Node{
  constructor(data){
    this.data=  data;
    this.left =null;
    this.right = null;
  }
}
class BinaryTree {
  constructor(){
    this.root = null;
  }
  insert(data){
    let node = this.root;
    const newnode = new Node(data);
    if(node==null){
      this.root = newnode;
    }else{
       this.insertNode(this.root,newnode);
    }
  }
  insertNode(node,newnode){
    if(node.left==null){
      node.left = newnode;
    }else if(node.right==null){
      node.right=newnode;
    }else{
     this.insertNode(node.left,newnode);
    }
  } 
  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
}
const rl = readline.createInterface(
  {input: process.stdin,
  output: process.stdout,}
)
let t = new BinaryTree();
function getUserInput(){
  rl.question("Enter data to insert in binary tree and press 0 for exit",(ans)=>{
    if(ans==0){
      console.log("Displaying the inorder output");
      t.inOrder(t.root)
      console.log(t.root ,"this is a node")
      rl.close();
    }else{
      const number = parseInt(ans);
      if(!isNaN(number)){
        t.insert(number);
      }else{
        console.log("this is not a valid number please Enter the valid number ");
      }
     getUserInput();
    }
  });
}
getUserInput();
