class Node{
    constructor(data){
        this.data= data;
        this.left = null;
        this.right =  null;
        this.height = 1;
    }
}
class AvlTree{
    constructor(){
        this.root =null;
    }

   height(node){
    if(node==null){
        return 0
    }
    return node.height;
   }

   balancingFactor(node){
    if(node===null) return 0
    return this.height(node.left)-this.height(node.right);
   }
    
   rightRoation(y){
    if(y==null){
        return 
    }
    const x = node.left;
    const nulable = y.right;

    x.right = node;
    y.left = nulable;

    x.height = 1+Math.max(this.height(x.left),this.height(x.right));
    y.height = 1+Math.max(this.height(y.left),this.height(y.right));

    return x;
   }

   leftRotaion(x){
    if(x==null){
        return;
    }
    const y = x.right;
    const nulable = x.left;
    
    y.left=x;
    x.right =nulable;

    x.height = 1+ Math.max(this.height(x.left),this.height(y.right));
    y.height = 1+ Math.max(this.height(y.left),this.height(y.right));
    return y;
   }
   getMini(node){
    let cur = node;
    while(cur.left!==null){
        cur = cur.left;
    }
    return cur;
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

    const balance = this.balancingFactor(node);

    if (balance > 1 && value < node.left.data) {
      return this.rightRoation(node);
    }
    if (balance < -1 && value > node.right.data) {
      return this.leftRotaion(node);
    }
    if (balance > 1 && value > node.left.data) {
      node.left = this.leftRotaion(node.left);
      return this.rightRoation(node);
    }
    if (balance < -1 && value < node.right.data) {
      node.right = this.rightRoation(node.right);
      return this.leftRotate(node);
    }
    return node;
  }

   insertValue(data){
    this.root = this.insert(this.root,data);
   }

   deleteNode(node,data){
    if(node===null) return node;
   
    if(data<node.data){
        node.left =this.deleteNode(node.left , data);
    }
    else if(data>node.data){
        node.right = this.deleteNode(node.right,data);
    }
    else {
        if(node.left ==null){
            return node.right;
        }else if(node.right==null){
            return node.left;
        }

        const temp = this.getMini(node.right);
        node.data = temp.data;
        node.right = this.deleteNode(node.right,temp.data);
    }
    node.height = 1 + Math.max(this.height(node.left),this.height(node.right));

    const balance = this.balancingFactor(node);


    if(balance>1&& this.balancingFactor(node.left)>=0){
        return this.rightRoation(node);
    }
    if(balance>1 && this.balancingFactor(node.left)<0){
        node.left = this.leftRotaion(node);
        return this.rightRoation(node);
    }
    if(balance<-1&& this.balancingFactor(node,right)<=0){
         return this.rightRoation(node);
    }
    if(balance<-1 && this.balancingFactor(node.right)<0){
        node.right = this.rightRoation(node);
        return this.leftRotaion(node);
    }
    return node;
   }
   
   deleteValue(value) {
    this.root = this.deleteNode(this.root, value);
  }


   inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  display() {
    this.inOrder(this.root);
  }

}

let tree = new AvlTree();
tree.insertValue(10);
tree.insertValue(20);
tree.insertValue(30);
tree.insertValue(40);
tree.insertValue(50);
tree.insertValue(25);

tree.display();


tree.deleteValue(20);

console.log("")
tree.display();
