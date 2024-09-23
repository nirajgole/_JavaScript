"use strict";
//  Definition for singly-linked list.
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function addTwoNumbers(l1, l2) {
    console.log({ l1, l2 });
}
// Input:
const l1 = [2, 4, 3], l2 = [5, 6, 4];
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
console.log(addTwoNumbers(l1, l2));
