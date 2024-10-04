var removeNthFromEnd = function(head, n) {
   let res = new ListNode(0, head);    
   let newHead = res;
   for(let i=0; i<n; i++){
    head = head.next;
   }
   while(head!=null){
     head = head.next;
     newHead =  newHead.next;
   }
   newHead.next = newHead.next.next;
   return res.next;
};
