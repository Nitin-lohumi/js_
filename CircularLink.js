class Newnode{
    constructor(data){
      this.data  = data;
      this.next =null;
    }
}
class circularLinkList{
    constructor(){
        this.head =null;
        this.size = 0;
    }
    insert(element){
        let newnode =new  Newnode(element);
        let temp;
        if(this.head ==null){
            this.head = newnode;
        }
        else{
            temp = this.head;
            while(temp.next){
                temp=temp.next;
            }
            temp.next= newnode;
            // newnode.next = this.head;
        }
        console.log("inserted");
        this.size++;
    }
    delete(index){
        let temp;
        let prev;
        let  i=0;
        if(this.head ===null){
            console.log("empty linked list ");
            return;
        }
        else if(index==0){
             this.head = this.head.next;
             temp = this.head;
             while(this.temp!=this.head){
                temp = temp.next;
             }
             temp.next = this.head;
        }
        else{
            while(i<index){
                i++;
                temp = this.head;
                prev = temp;
                temp = temp.next;
            }
            prev.next = temp.next;
        }
        // temp.next = this.head;
        this.size--;
        console.log("deleted");
    }
    print(){
        let temp; 
        temp = this.head;
        if(this.head==null){
            console.log("this is null");
        }
        else{
            while(temp){
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
      isPalindrome = function() {
        let Str = "";
        while(this.head!=null)
        {
          Str = Str+this.head.data;
          this.head= this.head.next;
        }
        return Str.split("").reverse().join('').match(Str)?true:false;
      };
}

let cl = new circularLinkList();
cl.insert(1);
cl.insert(2);
cl.insert(2);
cl.insert(1);
cl.print();
console.log(cl.isPalindrome());