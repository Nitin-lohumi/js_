class Node{
  constructor(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinaryTree{
  constructor(){
    this.root = null;
  }
  insert(data){
    if(this.root==null){
      this.root = new Node(data);
    }
    else{
      //helper function
      this.addInsert(this.root,data);
    }
  }
  addInsert(root,data){
    let newnode = new Node(data);
    if(data<root.data){
      if(root.left==null){
         root.left = newnode;
      }else{
        root.left = this.addInsert(root.left,data);
      }
    }
    else{
     if(root.right==null){
      root.right = newnode;
     }else{
      root.right = this.addInsert(root.right,data);
     }
    }
  }
  findMinimum(node){
    if(node.left==null){
      return node.data;
    }
    return this.findMinimum(node.left);
  }

  delete(node,data){
    if(this.root==null){
      return null;
    }
    if(data<node.data){
      node.left = this.delete(node.left,data);
    }
    else if(data>node.data){
      node.right = this.delete(node.right,data);
    }
    else{
      // case 1:
      if(node.right==null && node.left==null){
        return null;
      }
      // case 2:
      if(node.left==null){
        return node.right;
      }
      else if(node.right==null){
        return node.left;
      }
      // case 3: 
      node.data = this.findMinimum(node.right);
      node.right = this.delete(node.right,node.data);
    }
    return node;
  }
  inorder(node=this.root){
    if(node!=null){
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}


let t = new BinaryTree();
t.insert(10);
t.insert(5);
t.insert(20);
t.inorder();
console.log("after delete ")
t.root = t.delete(t.root,5);
t.inorder();





















// class Node {
//   constructor(data){
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }
// class BinaryTree{
//   constructor() {
//     this.root = null;
//   }
//   insert(data){
//     const newnode = new Node(data);
//     if(this.root===null){
//       this.root = newnode;
//     }else{
//       this.insert_node(this.root,newnode);
//     }
//   }
//   insert_node(node,newnode){
//     if(newnode.data<node.data){
//       if(node.left==null){
//         node.left = newnode;
//       }else{
//         this.insert_node(node.left,newnode);
//       }
//     }
//     else{
//       if(node.right==null){
//         node.right = newnode;
//       }else{
//         this.insert_node(node.right,newnode);
//       }
//     }
//   }
//    DeleteNode(root,key){
//     if (root === null) {
//       return null; // Base case: If the tree is empty
//   }
//   if (key < root.data) {
//       root.left = this.DeleteNode(root.left, key);
//   } else if (key > root.data) {
//       root.right = this.DeleteNode(root.right, key);
//   } else {
//       if (root.left === null && root.right === null) {
//           return null;
//       }
//       if (root.left === null) {
//           return root.right;
//       } else if (root.right === null) {
//           return root.left;
//       }
//       root.data = this.findMinNode(root.right);;
//       root.right = this.DeleteNode(root.right, root.data);
//     }
//     return root;
//    }
//   inorder(node = this.root) {
//     let arr = [];
//      function inorderfun(root){
//       if(!root){
//         return;
//       }
//       inorderfun(root.left);
//       arr.push(root.data);
//       inorderfun(root.right);
//      }
//      inorderfun(node)
//      console.log(arr)
//   }
//   FindSmallestNode(node =  this.root) {
//     if(node.left=== null){
//       return node.data;
//     }
//     return this.FindSmallestNode(node.left);
// }
//   findLargest(node = this.root){
//     if(node.right === null){
//       return node.data;
//     }
//     return this.findLargest(node.right);
//   }
// }
// let tree = new BinaryTree();
// tree.insert(40);
// tree.insert(20);
// tree.insert(10);


// console.log("this is the smallest node "+ tree.FindSmallestNode());
// console.log("this is the largest node "+ tree.findLargest());
// tree.inorder();

// tree.root = tree.DeleteNode(tree.root,10);

// console.log("this is the after delete node ");
// tree.inorder();

// // console.log(tree.root)