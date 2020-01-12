// Min to Front
// Given an array of comparable values, 
// move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. 
// Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 

// As always, do this without using built-in functions.

function pushFront(arr, val) {

  for(var idx = arr.length; idx >= 1; idx--) {
    arr[idx] = arr[idx - 1];
    // console.log(arr)
  }
  arr[0] = val;
  // console.log(arr)
  return arr;

}


function removeAt(arr, idx) {
  var returnVal2 = arr[idx];

  for(var i = idx; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    // console.log(arr);
  }
  arr.pop();
  // console.log(arr);
  return returnVal2;
}


function minToFront(arr) {
  // console.log(arr);
  var min = arr[0];
  // console.log(min);

  for(var i=0; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i];
      // console.log(min);
      idx = i + 1;
      // console.log(idx);
    }
  }
  pushFront(arr, min);
  removeAt(arr, idx);
  return arr;
}
minToFront([7,4,1,3,-1,5]);