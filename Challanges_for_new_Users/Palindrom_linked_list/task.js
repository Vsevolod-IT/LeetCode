/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let ar = [];
    while(head){
        ar.push(head.val);
        head = head.next;
    }

    let index = ar.length - 1;

    for(let i = 0; i < ar.length; i++){
        if(ar[i] !== ar[index]){
            return false;
        }
        index--;
    }
    return true;
};
