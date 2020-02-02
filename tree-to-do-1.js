class BSTNode {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  addNode(val, position = this.root) {
    if (this.root === null) {
      this.root = new BSTNode(val);
      return;
    }
    else if (val < position.value) {
      if(position.left == null) {
        position.left = new BSTNode(val);
        return;
      } else {
        return this.addNode(val, position.left);
      }
    } else {
      if(position.right == null) {
        position.right = new BSTNode(val);
        return;
      } else {
        return this.addNode(val, position.right);
      }
    }
  }

  contains(val, position = this.root) {
    if(this.root === null) {
      return false;
    }
    // check root
    if(position.value === val) {
      return true;
    }
    if(val < position.value) {
      return this.contains(val, position.left)
    } else {
      return this.contains(val, position.right)
    }
  }

  min(position = this.root) { 
    if(this.root === null) {
      return null;
    } 
    if (position.left === null) {
      return position.value;
    } else {
      return this.min(position.left);
    }
  }

  max(position = this.root) { 
    if(this.root === null) {
      return null;
    } 
    if (position.right === null) {
      return position.value;
    } else {
      return this.max(position.right);
    }
  }

  size(position = this.root) {
    if(position === null) {
      return 0;
    }
    return 1 + this.size(position.left) + this.size(position.right);
  }

  isEmpty() {
    if(this.root == null) {
      return true;
    } else {
      return false;
    }
  }

}

var tree = new BinarySearchTree();
console.log("Tree is empty:" + " " + tree.isEmpty());
console.log("Tree size:" + " " + tree.size());
tree.addNode(25);
tree.addNode(17);
console.log("Max tree value:" + " " + tree.max());
tree.addNode(42);
tree.addNode(20);
console.log("Tree size:" + " " + tree.size());
console.log("Min tree value:" + " " + tree.min());
console.log("Max tree value:" + " " + tree.max());
console.log("Tree is empty:" + " " + tree.isEmpty());
console.log(tree);






// getMax = function(node){ if(!node) node = this.root; while(node.right) { node = node.right; } return node.value;};
