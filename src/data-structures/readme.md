# Data Structures

## Stacks

It can be implemented using linked lists or arrays, with the last one being easier to do it because its behavior is similar to a stack.

| Operation   | Performance |
| ----------- | ----------- |
| lookup      | O(n)        |
| pop         | O(1)        |
| push        | O(1)        |
| peek        | O(1)        |

## Queues

It can be implemented using linked lists, arrays and even a stack. Linked lists make it easier thanks to the links between the nodes that make it fast to remove the first element in the line and update the pointer to the next one. Otherwise, using arrays is not performative because the **shift** operation (that removes the first element of this data structure) is O(n).

| Operation   | Performance |
| ----------- | ----------- |
| lookup      | O(n)        |
| pop         | O(1)        |
| push        | O(1)        |
| peek        | O(1)        |

## Binary Search Tree

It is a tree in which each node has at most two children. Besides that, the left subtree of a node contains only nodes with keys lesser than the node’s key. While the right subtree contains only nodes with keys greater than the node’s key.

| Operation   | Performance |
| ----------- | ----------- |
| lookup      | O(log(n))   |
| insert      | O(log(n))   |
| delete      | O(log(n))   |
