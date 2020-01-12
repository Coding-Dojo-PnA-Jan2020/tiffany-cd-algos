// Push Front
// Given an array and an additional value, 
// insert this value at the beginning of the array.

// Do this without using any built-in array methods.
function pushFront(arr, val) {

  for(var idx = arr.length; idx >= 1; idx--) {
    arr[idx] = arr[idx - 1];
    // console.log(arr)
  }
  arr[0] = val;
  // console.log(arr)
  return arr
}
pushFront([1,2,3,4], 22); // Returns [22,1,2,3,4]


// Pop Front
// Given an array, remove and return 
// the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().

function popFront(arr) {
  var returnVal = arr[0];

  for (var idx = 0; idx < arr.length; idx++) {
    arr[idx] = arr[idx + 1];
    // console.log(arr);
  }
  arr.pop();
  // console.log(arr);
  return returnVal;
}
popFront(["rick",2,3,9]); // Returns rick


// Insert At
// Given an array, index, and additional value, 
// insert the value into array at given index. 
// Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, idx, val) {

  for (var i = arr.length; i > idx; i--) {
    arr[i] = arr[i - 1];
    // console.log(arr);
  }
  arr[idx] = val;
  return arr;
}
insertAt([1,2,3,4,5,6,7], 3, -66); //Returns [1,2,3,-66,4,5,6,7]


// Remove At
// Given an array and an index into array, 
// remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).

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
removeAt([1,2,-3,"morty"], 2); // Returns -3


// Swap Pairs
// Swap positions of successive pairs of values 
// of given array. If length is odd, do not change 
// the final element. For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to 
// [true,"Brendan",42]. As with all array challenges, 
// do this without using any built-in array methods.

function swapPairs(arr){
  if (arr.length % 2 == 0) {
    for(var i = 0; i < arr.length; i = i + 2){
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      // console.log(arr);
    }
  } else {
    for(var i = 0; i < arr.length - 1; i = i + 2){
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      // console.log(arr);
    }
  }
  return arr;
}
swapPairs([1,2,3,4,5,6,-33,-27,0,"bob"]); // Returns [2,1,4,3,6,5,-27,-33,'bob',0]
swapPairs([-1,2,3,4,true,"five",false]); // Returns  [2,-1,4,3,'five',true,false]


// Remove Duplicates
// Sara is looking to hire an awesome web developer 
// and has received applications from various sources. 
// Her assistant alphabetized them but noticed some duplicates. 
// Given a sorted array, remove duplicate values. 
// Because array elements are already in order, 
// all duplicate values will be grouped together. 
// As with all these array challenges, do this without 
// using any built-in array methods.

function removeDuplicates(arr) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      newArray.push(arr[i]);
      // console.log(newArray);
    }
  }
  return newArray;
}

removeDuplicates(["bob", "bob", "dahlia", "roger", "sammy", "sammy", "sammy"]); 
// Returns ['bob', 'dahlia', 'roger', 'sammy']