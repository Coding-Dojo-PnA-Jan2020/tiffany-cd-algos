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
  max() {
    var newNode = this.head;
    var max = node.value;
    while(newNode !== null) {
        if(newNode.value > max) {
            max = node.value;
        }
        node = node.next;
    }
    return max;
  }

  min() {
    var newNode = this.head;
    var min = newNode.value;
    while(newNode !== null) {
        if(newNode.value < min) {
            min = newNode.value;
        }
        newNode = newNode.next;
    }
    return min;
  }

  average() {
    var newNode = this.head;
    var count = 0;
    var sum = 0;

    while(newNode !== null) {
        count++;
        sum += newNode.value;
        newNode = newNode.next;
    }

    var ave = sum/count;
    return ave;
  }
}

// Max/Min/Average
// SList: Max
// American Idol seems to air singers that are the best, 
// and a few that seem like the worst! Create function 
// max(node) to return list’s largest val.

function max() {
  var newNode = this.head;
  var max = node.value;
  while(newNode !== null) {
      if (newNode.value > max) {
          max = node.value;
      }
      node = node.next;
  }
  return max;
}


// SList: Min
// Create min(node) to return list’s smallest val.

function min() {
  var newNode = this.head;
  var min = newNode.value;
  while(newNode !== null) {
      if(newNode.value < min) {
          min = newNode.value;
      }
      newNode = newNode.next;
  }
  return min;
}


// SList: Average
// Create average(node) to return average val.
function average() {
  var newNode = this.head;
  var count = 0;
  var sum = 0;

  while(newNode !== null) {
      count++;
      sum += newNode.value;
      newNode = newNode.next;
  }

  var ave = sum/count;
  return ave;
}