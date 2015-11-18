//var Invert = require('../Src/226Invert_Binary_Tree');
//
//function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
//}
//
/**
 * @TODO Implement test for problem Invert Binary Tree
/**
 * @param {}
 * @return {TreeNode}
 */
//function InitTree(elem) {
//    var Node = new TreeNode();
//    Node.val = elem;
//    Node.left = Node.right = null;
//
//    return Node;
//}
//
/**
 * @param {TreeNode} root
 * @return {TreeNode} root
 */
//function CreatTree(root) {
//    var _case = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//    var Queue = [];
//
//    var p = root = InitTree(_case.shift());
//    p.left = InitTree(_case.shift());
//    p.right = InitTree(_case.shift());
//    Queue = Queue.push(p.left, p.right);
//    console.log(Queue);
//    while(p.left !== null || p.right !== null) {
//        p = Queue.shift();
//        p.left = InitTree(_case.shift());
//        p.right = InitTree(_case.shift());
//        Queue = Queue.push(p.left, p.right);
//    }
//
//    return root;
//}

/**
 * @param {TreeNode} root
 * @return {None}
 */
//function Print(root) {
//    while(root) {
//        console.log(root.val);
//        Print(root.left);
//        Print(root.right);
//    }
//}

////var root;
//root = CreatTree(root);
//Invert.invertTree(root);
//Print(root);
