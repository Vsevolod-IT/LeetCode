/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let cp = head
    let ar = [];
    let long;

    while(cp){
        ar.push(cp.val);
        cp = cp.next;
    }

    long = ar.length

    if(long % 2 === 0){
        long = ((long / 2) + 1) - 1;
    } else {
        long = ((long + 1) / 2) - 1;
    }

    while(long){
        head = head.next;
        long--;
    }

    return head;
};
