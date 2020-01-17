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
  addFront(val) {
    var newNode = new Node(val); // construct new node
    if(this.head == null) {
      this.head = newNode; // the position at this.head now holds the newNode object (attach the head to the Node)
      return this;
    }
    newNode.next = this.head; // the pointer for newNode now goes to the NODE located at this.head (attach the head to the new node)
  }

  removeFront() {
    var valToReturn = this.head.value;
    this.head = this.head.next;
    return valToReturn;
  }

  front() {
    if(this.head) {
      return this.head.value;
    } else {
      return null;
    }
  }
  
}

var myList = new SList();
myList.addFront(5);
myList.removeFront();


// Fronts
// Add Front
// Rudy isn’t nice: he cuts in line in front of everyone else. 
// Given a pointer to the first ListNode and a value, create a new node, 
// assign it to the list head, and return a pointer to the new head node.

addFront(val) {
  var newNode = new Node(val);
  if(this.head == null) {
    this.head = newNode; // the position at this.head now holds the newNode object
    return this;
  }
  newNode.next = this.head; // the pointer for newNode now goes to the NODE located at this.head
}


// Remove Front
// Ha! Rudy is getting what he deserves – kicked out of line. 
// Given a pointer to the first node in a list, remove the head node and return the 
// new list head node. If the list is empty, return null.

removeFront() {
  var valToReturn = this.head.value;
  this.head = this.head.next;
  return valToReturn;
}


// Front
// Finally, Tad and Sam reach the front of the line to get 
// movie tickets. Oh no – only one seat remains! Who was 
// earlier in line: Tad or Sam? Return the value (not the node) 
// at the head of the list. If the list is empty, return null.

front() {
  if(this.head) {
    return this.head.value;
  } else {
    return null;
  }
}