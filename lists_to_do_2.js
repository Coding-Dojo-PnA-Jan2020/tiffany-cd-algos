class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SList {
  constructor() {
    this.head = null;
  }
  // all class methods go here

  secondToLastval(node) {
    node = this.head;
    if (node == null || node.next == null) {
        return null;
    }
    while (node.next.next != null) {
        node = node.next;
    }
    return node.val;
  }

  removeSelf(node){
    var node = list.head;
    while (node.next != this){
      node = node.next;
    }
    node.next = node.next.next;
  }
  
  isEmpty() {
    if(this.head === null) {
      return true; 
    } else {
      return false;
    }
  }

  addFront(val) {
    var newNode = new Node(val); // construct new node
    if(this.head == null) {
      this.head = newNode; // the position at this.head now holds the newNode object (attach the head to the Node)
      return this;
    }
    newNode.next = this.head; // the pointer for newNode now goes to the NODE located at this.head (attach the head to the new node)
  }

  addBack(val) {
    var newNode = new Node(val);
    var current = this.head;
    // edge case: empty list
    if(this.isEmpty()) {
      this.addFront(val);
      return;
    }
    while(current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  copy() {
    newList = new SList()
    var node = this.head;
    while (node != null) {
      newList.addBack(node.val);
      node = node.next;
    }
    return emptyList;
  }
  
  filter(lowVal, highVal) {
    var node = this.head;
    while (node != null && (node.val < lowVal || node.val > highVal)) {
      node = node.next;
      this.head = node;
    }
    while (node != null) {
      while (node.next != null && (node.next.val < lowVal || node.next.val > highVal)) {
        node.next = node.next.next;
      }
      node = node.next;
    }
    return this;
  }
}


// SList: Second to Last Value
// Create a standalone function that, given a pointer to the 
// first node in a singly linked list, will return the 
// second-to-last value in that list. What will you 
// return if the list is not long enough?

secondToLastval() {
  var node = this.head;
  if (node == null || node.next == null) {
    return null;
  }
  while (node.next.next != null) {
    node = node.next;
  }
  return node.val;
}



// SList: Delete Given Node
// Create ListNode method removeSelf() to disconnect 
// (remove) itself from linked lists that include it. 
// Note: the node might be the first in a list (it won’t 
//   be the last), and you do NOT have a pointer to the previous node. 
//   Also, don’t lose any subsequent nodes pointed to by .next.

removeSelf() {
  var node = this.head;
  while (node.next != this){
    node = node.next;
  }
  node.next = node.next.next;
}


// SList: Copy
// Given a pointer to a singly linked list, return 
// a copy of that list. Do not return the same list, 
// but instead make a copy of each node in the list and connect 
// them in the same order as the original.


copy() {
  newList = new SList()
  var node = this.head;
  while (node != null) {
    newList.addBack(node.val);
    node = node.next;
  }
  return emptyList;
}

// SList: Filter
// Given a headNode, a lowVal and a highVal, remove 
// from the list any nodes that have values 
// less than lowVal or higher than highVal. 
// Return the new list.

filter(lowVal, highVal) {
  var node = this.head;
  while (node != null && (node.val < lowVal || node.val > highVal)) {
      node = node.next;
      this.head = node;
  }
  while (node != null) {
      while (node.next != null && (node.next.val < lowVal || node.next.val > highVal)) {
          node.next = node.next.next
      }
      node = node.next;
  }
  return this;
}