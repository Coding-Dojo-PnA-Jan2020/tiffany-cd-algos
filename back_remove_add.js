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

  back(next) {
    var current = this.head;
    while(current !== null) {
      current = current.next;
    }
    return current.value;
  }

  length() {
    var count = 0;
    var runner = this.head; // the variable runner is now set to the same Node that exists at this.head position
    while(runner != null) {
      count++;
      runner = runner.next;
    }
    return count;
  }

  removeBack() {
    var size = this.length(), 
      count = 1;
  
      // edge case: head is only node 
      if(size === 1) {
        var valToReturn = this.head.value;
        this.head = null;
        return valToReturn;
      }
  
      var current = this.head;
      while(count < size-1) {
        count++;
        current = current.next;
      }
      var value = current.next.val;
      current.next = null;
      return value;
  }
  
  addFront(val) {
    var newNode = new Node(val); 
    if(this.head == null) {
      this.head = newNode; 
      return this;
    }
    newNode.next = this.head; 
  }

  isEmpty() {
    return this.head === null;
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

}


// Back/Remove/Add
// SList: Back
// Create a function that accepts a ListNode pointer 
// and returns the last value in the list.

function back(next) {
  var newNode = this.head;
  while(newNode !== null) {
    newNode = newNode.next;
  }
  return newNode.value;
}



// SList: Remove Back
// Create a standalone function that removes the 
// last ListNode in the list and returns the new list.
function removeBack() {
  var size = this.length();
  var count = 1;

    // edge case: head is only node 
    if(size === 1) {
      var valToReturn = this.head.value;
      this.head = null;
      return valToReturn;
    }
    var current = this.head;
    while(count < size-1) {
      count++;
      current = current.next;
    }
  var value = current.next.value;
  current.next === null;
  return value;
}



// SList: Add Back
// Create a function that creates a ListNode with 
// given value and inserts it at end of a linked list.

function addBack(val) {
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


