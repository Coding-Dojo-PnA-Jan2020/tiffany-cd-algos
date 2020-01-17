// Contains
// Sam thinks Tad might be somewhere in a very long line 
// waiting to attend the Superman movie. Given a ListNode 
// pointer and a val, return whether val is found in any node in the list.

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
  isEmpty() {
    return this.head === null;
    
    // (or/alternative solution)
    // if(this.head === null) {
    //   return true; 
    // } else {
    //   return false;
    // }
  }

  contains(value) {
    if(this.isEmpty()) {
      return false;
    }

    var runner = this.head;
    while(runner) {
      if(runner.value === value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  
}
