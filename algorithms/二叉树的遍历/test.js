import ListNode from "./ListNode.js"
import { preOrderIteration, preOrderIteration2 } from './前序遍历(根、左、右).js' 
import { inOrderIteration, inOrderIteration2 } from './中序遍历(左、根、右).js' 
import { postOrderIteration, postOrderIteration2 } from './后序遍历(左、右、根).js'
import { levelOrder2 } from './层序遍历.js'

let root = new ListNode(2)
root.left = new ListNode(7)
root.right = new ListNode(5)
root.left.right = new ListNode(6)
root.left.left = new ListNode(4)
root.right.right = new ListNode(3)
root.right.left = new ListNode(9)

console.log(`前序:${ preOrderIteration(root) }`)
console.log(`前序:${ preOrderIteration2(root) }`)
console.log(`中序:${ inOrderIteration(root) }`)
console.log(`中序:${ inOrderIteration2(root) }`)
console.log(`后序:${ postOrderIteration(root) }`)
console.log(`后序:${ postOrderIteration2(root) }`)
console.log(`层序:${ levelOrder2(root) }`)
// console.log(`后序:${ postOrderIteration2(root) }`)