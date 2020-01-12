// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing 
// elements moved to other indices so that order of elements is reversed. 
// Working ‘in-place’ means that you cannot use a second array 
// – move values within the array that you are given. 
// As always, do not use built-in array functions such as splice().

function reverse(arr) {
  var temp;

  for(var i = 0; i < (arr.length)/2; i++) {
    temp = arr[i];
    arr[i] = arr[arr.length-1-i];
    arr[arr.length-1-i] = temp;
    // console.log(arr);
  }
  return arr;
}
reverse([1,2,-3,true,5,6]); // Returns [6,5,true,-3,2,1]
reverse([1,2,-3,5,6]); // Returns [6,5,-3,2,1]


// Rotate

// Implement rotateArr(arr, shiftBy) that accepts array and offset. 
// Shift arr’s values to the right by that amount. ‘Wrap-around’ 
// any values that shift off array’s end to the other side, so that 
// no data is lost. Operate in-place: given ([1,2,3],1), change the array 
// to [3,1,2]. Don’t use built-in functions.

// Second: allow negative shiftBy (shift L, not R).

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

function rotateArray(arr,shiftBy) {
  var rotate = shiftBy % arr.length;
  if (rotate < 0) {
    rotate = rotate + arr.length;
  }
  for(var i = arr.length-1; i >= 0; i--) {
    arr[i+rotate] = arr[i];
    // console.log(arr);
  }
  // console.log("halfway there")

  for(var i2 = rotate; i2 > 0; i2--) {
    arr[i2-1] = arr[arr.length-1];
    // console.log(arr);
    arr.pop();
  }
  return arr;
}
rotateArray([1,-2,3,true,"rick"], 2);


// Filter Range
// Alan is good at breaking secret codes. 
// One method is to eliminate values that lie within 
// a specific known range. Given arr and values min and max, 
// retain only the array values between min and max. Work in-place: 
// return the array you are given, with values in original order. 
// No built-in array functions.

function filterRange(arr, min, max){
  for (var i = arr.length-1; i >= 0; i--){
    if (arr[i] < min || arr[i] > max){
      for (var i2 = i; i2 < arr.length-1; i2++){
        arr[i2] = arr[i2+1];
        // console.log(arr);
      }
      arr.pop();
    }
  }
  return arr;
}
filterRange([1,-2,3,true,], -3, 2); // This function returns the values between, but not including, min and max. Returns [1,-2, true]. Doesn't remove strings, so I guess the assumption is that all values are numbers.

// Concat
// Replicate JavaScript’s concat(). Create a standalone function 
// that accepts two arrays. Return a new array containing the 
// first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) 
// should return new array ['a','b',1,2].

function arrConcat(arr1, arr2) {
  var newArr = [];

  for (var i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }
  return newArr;
}

arrConcat(['a','b'], [1,2]); // Returns ['a','b',1,2]


// Skyline Heights
// Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
// Let’s say you are given an array with heights of consecutive buildings, 
// starting closest to you and extending away. Array [-1,7,3] 
// would represent three buildings: first is actually out of view 
// below street level, behind it is second at 7 stories high, third is 
// 3 stories high (hidden behind the 7-story). You are situated at street level. 
// Return array containing heights of buildings you can see, in order. 
// Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. 
// As always with challenges, do not use built-in array functions such as unshift().

function skyline(arr) {
  var visible = 0;
  var newArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > visible) {
      newArr.push(arr[i]);
      visible = arr[i];
      // console.log(newArr);
    }
  }
  return newArr;
}
skyline([-1,1,1,7,3]); // Returns [1,7]
skyline([0,4,4,-1,35]); // Returns [3,35]