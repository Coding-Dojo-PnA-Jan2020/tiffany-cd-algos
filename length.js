// Length
// July 20, 2013: about 5000 people wait in line for 
// a chance to audition for American Idol. Create a function 
// that accepts a pointer to the first list node, and 
// returns number of nodes in that SList.

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
  length() {
    var count = 0;
    var runner = this.head; //the variable runner is now set to the same Node that exists at this.head position
    while(runner != null) {
      count++;
      runner = runner.next;
    }
    return count;
  }
  
}


