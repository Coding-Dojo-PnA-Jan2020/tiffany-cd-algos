/*

Recursive Sigma
Write a recursive function that given a 
number returns the sum of integers from 1 to that number.
*/

function rSigma(val, sum=0) {
  val = Math.floor(val);
  if(val <= 0) {
    return 0;
  }
  sum += val;
  if(val == 1) {
    return 1;
  }
  return val + rSigma(val-1, sum);
}

console.log(rSigma(11.2));
console.log(rSigma(5));

/*
Recursive Factorial
Given num, return the product of ints from 1 up to num. 
If less than zero, treat as zero. If not an 
integer, truncate. Experts tell us 0! is 1.
*/

function rFact(val) {
  if(val <= 1) {
    return 1;
  }
  return rFact(val-1) * Math.floor(val);
}
console.log(rFact(3));
console.log(rFact(6.5));

/*
Flood Fill
Most graphical “paint” applications have a ‘paintcan fill’ 
function that floods part of an image with a certain color. 
We change the image as if we painted a canvas: a two-dimensional 
array of integers, where each integer represents a color for that pixel. 
The canvas Array.length is the Y dimension of our canvas; 
each spot in the canvas array is a row in our image, with 
a length equal to our canvas’ X dimension. You are given a 
canvas (2-dimensional array of integers), starting coordinate 
(2-element array), and the color to flood (integer value). 
Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s 
color value only if it is the same color as the origin coordinate 
and is directly adjacent via X or Y to another pixel you will change. 

Note: diagonally related pixels are not considered adjacent.
*/

function floodFill(newCanvas, startXY, newColor, oldColor) {
  var x = startXY[0];
  var y = startXY[1];
  var currentColor = canvas2D[y][x];

  if(oldColor === undefined){
    oldColor = currentColor;
  }

  if(oldColor != currentColor) {
    return newCanvas;
  }

  newCanvas[y][x] = newColor;

  if(y-1 >= 0) {
    floodFill(newCanvas, [x, y-1], newColor, oldColor);
  }
  if(y+1 < newCanvas.length) {
    floodFill(newCanvas, [x, y+1], newColor, oldColor);
  }
  if(x-1 >= 0) {
    floodFill(newCanvas, [x-1, y], newColor, oldColor);
  }
  if(x+1 < newCanvas[y].length) {
    floodFill(newCanvas, [x+1, y], newColor, oldColor);
  }
  return newCanvas;
}

var canvas2D = [ 
  [3,2,3,4,3],
  [2,3,3,4,0],
  [7,3,3,5,3],
  [6,5,3,4,1],
  [1,2,3,3,3],
];

console.log(floodFill(canvas2D, [2,2], 77));