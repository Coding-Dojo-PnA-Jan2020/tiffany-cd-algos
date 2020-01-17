// Display
// Create display(node) for debugging that returns a 
// string containing all list values. Build what you 
// wish console.log(myList) did!

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
  display() {
    var listValues = "";
    var runner = this.head;
    while(runner !== null) {
      listValues += `${runner.value}`
    }
    return listValues;
  }

}
