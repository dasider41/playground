/*
https://leetcode.com/problems/rotate-function/

396. Rotate Function

Given an array of integers A and let n to be its length.

Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

Calculate the maximum value of F(0), F(1), ..., F(n-1).

Note:
n is guaranteed to be less than 105.

Example:

A = [4, 3, 2, 6]

F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.

*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  if (!A.length) {
    return 0;
  }

  const array_rotate = arr => {
    arr.unshift(arr.pop());
    return arr;
  };

  const getSum = arr => {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
      sum += i * arr[i];
    }
    return sum;
  };

  let arrTotal = [];
  A.map(() => {
    arrTotal.push(getSum(A));
    A = array_rotate(A);
  });

  return Math.max.apply(null, arrTotal);
};

const A = [4, 3, 2, 6];
console.log(maxRotateFunction(A) === 26);

const B = [-2147483648, -2147483648];
console.log(maxRotateFunction(B) === -2147483648);

const C = [1000000007];
console.log(maxRotateFunction(C) === 0);

const D = [17,11,-7,17,7,-1,19,-1,-2,18,16,8,1,4,11,-1,2,14,17,13,-1,-3,6,6,-10,13,10,-5,5,-5,17,19,10,7,14,-2,-1,-2,-5,7,13,15,-8,17,-4,14,-1,-6,-5,1,16,-9,14,5,8,0,15,19,5,13,14,-7,-10,3,5,0,-1,9,8,12,9,16,-4,1,-10,-9,0,-1,13,-3,-6,-4,-9,7,4,-6,8,14,-4,-7,3,3,11,4,0,17,0,-1,7,-8,-2,7,1,-2,7,4,-6,18,-8,3,2,1,0,-7,7,7,19,-1,2,0,6,19,-7,0,-5,11,5,-8,12,19,17,-9,14,-9,11,0,-5,14,-8,4,1,0,8,-2,9,-7,8,13,11,15,-7,2,-7,3,-1,16,-10,4,-3,6,3,13,-9,-8,4,-7,1,3,11,-8,9,11,1,-5,19,-7,-4,14,5,11,19,3,-4,19,2,7,19,2,10,13,0,-6,17,-8,9,0,12,-10,4,18,15,5,-10,-3,-3,-5,-9,-5,-7,12,15,3,3,-7,-4,1,11,-4,-9,14,2,2,8,2,12,5,15,-8,11,-2,-2,-4,8,-1,3,18,6,-5,4,16,3,10,15,-8,12,19,5,15,6,8,-2,18,-2,15,-3,1,2,-9,-5,0,3,-5,-5,-4,4,-2,-1,-6,-9,8,-2,18,14,-7,15,-3,-7,10,2,6,-3,-9,1,18,-7,18,2,11,14,13,4,-5,17,19,8,19,12,-2,19,13,5,-9,-9,14,7,7,19,12,-4,3,-2,14,19,-9,-7,-9,19,6,18,11,-6,7,-10,0,15,-2,8,13,12,4,0,1,13,11,17,12,9,16,-3,2,10,-2,9,18,-6,11,16,11,9,16,6,8,10,4,11,17,14,-10,-2,-6,-9,-9,0,-7,0,5,-4,14,16,-7,-2,-1,15,1,-4,18,-9,12,-6,15,4,12,-7,13,-10,-2,0,9,13,4,-10,5,8,1,13,18,8,-3,10,9,6,-3,-4,6,8,-7,-6,15,-2,0,-1,7,14,14,19,-5,-2,17,11,16,0,13,1,-10,1,8,-9,0,17,14,13,-9,14,-6,17,9,17,-3,19,4,9,-10,1,-7,12,1,0,17,8,6,7,-2,-6,5,10,10,6,19,-3,12,-3,11,-7,17,1,4,-4,-7,-8,9,18,8,3,0,15,8,9,10,-4,-4,-3,6,0,16,16,16,-9,11,0,0,-4,-5,19,18,15,-9,3,14,5,-10,8,2,6,-4,-3,-10,18,14,6,-8,7,15,7,-5,-10,-6,-3,1,11,-4,19,7,7,-3,13,17,16,-4,5,12,18,0,-5,5,3,0,13,19,-9,10,4,15,12,19,0,19,14,9,-6,5,5,3,3,3,-6,15,-10,17,-4,6,9,-6,9,1,-3,16,10,16,6,-3,8,14,-2,17,10,-1,-10,17,-10,-1,7,-5,6,-7,8,15,2,15,1,-5,6,8,2,9,7,19,-9,10,18,-5,1,-9,-5,-9,-1,-1,17,10,-1,9,4,-6,-5,11,-10,13,6,9,8,13,-5,4,10,1,-10,-7,-3,-8,-2,19,3,19,18,10,6,15,15,12,16,-4,8,3,14,8,-2,-1,-3,16,17,-7,10,17,7,-2,-3,-8,8,-8,-8,-4,6,-5,8,14,14,2,-8,-4,13,12,15,14,-1,2,-2,1,6,10,-6,-1,4,-2,16,-7,6,1,0,0,19,-4,-10,1,5,4,-10,-3,-5,13,14,-4,0,-3,-5,-2,-4,-3,5,12,11,11,-1,1,17,-1,-4,15,12,-2,12,0,19,3,-8,11,19,-8,-5,12,10,9,9,-5,18,16,9,3,-9,14,6,-5,7,4,12,5,18,-2,-2,-9,8,12,19,17,4,-1,15,-4,19,-9,-10,-2,11,7,9,-7,-8,-6,-2,5,2,-7,-8,13,-3,12,11,14,13,-5,11,-5,9,7,-8,4,1,-7,11,-3,-4,16,4,-3,0,11,14,10,-10,18,17,1,-8,7,8,10,-1,5,17,13,12,1,-10,-1,-9,13,-2,8,6,-3,-6,10,-2,6,12,19,6,-10,-10,0,12,2,12,-6,13,-2,3,16,0,11,17,-5,2,18,19,19,-7,-1,13,16,7,3,-5,18,-9,9,-3,15,1,7,-10,11,-7,2,13,-7,-10,8,-8,-2,-1,16,-2,-1,11,16,13,-1,5,-10,14,-7,12,13,-4,3,-4,1,-9,7,-5,1,18,8,-8,13,1,-10,6,4,-2,4,7,-4,2,7,1,2,-7,5,1,18,-10,-7,19,10,5,-2,19,-7,4,-5,6,-3,14,0,9,-6,3,17,16,5,-5,11,3,19,4,0,2,-2,-6,-6,-6,4,16,-9,4,19,0,1,16,-4,15,8,0,12,19,15,5,17,14,7,16,1,13,10,9,4,9,4,0,14,6,14,9,19,-10,3,11,6,17,-3,7,-5,15,5,9,4,-9,10,7,-6,-5,13,1,-6,5,13,10,-8,9,6,-5,2,-5,4,4,19,16,6,7,0,-9,5,-9,0,-9,16,1,13,18,15,8,7,-8,-2,11,-5,-9,19,13,-4,11,-8,-5,6,15,-6,-1,8,-7,18,12,19,6,7,2,-1,10,7,-1,16,1,11,-5,-4,2,13,-3,2,-9,-1,-6,18,-2,-1,15,-2,-9,-3,-4,11,17,-6,0,19,4,-7,13,5,8,-5,-1,18,8,4,9,19,-4,-2,-2,16,16,-1,2,4,3,0,13,19,5,9,0,9,12,19,18,15,16,13,3,-3,1,4,-9,-1,-3,-9,10,19,14,9,-2,15,6,15,-7,2,0,2,-9,19,5,-5,2,16,-10,-6,9,10,7,13,-9,-7,14,-10,-4,17,9,-8,17,13,16,5,-4,15,9,7,2,5,7,1,4,10,12,18,-6,-5,-8,12,9,-2,-9,-7,-9,12,15,10,17,10,2,-1,14,1,15,6,-5,-5,10,11,17,-7,-6,1,-2,9,-4,18,-8,5,19,12,13,-1,-1,-3,-6,16,-2,-8,2,17,-2,12,9,5,-9,15,11,-8,17,-2,-10,0,-8,-7,-5,-6,-3,3,-7,2,4,11,3,-10,16,11,4,14,-5,15,0,7,5,-5,2,-9,-8,2,0,4,12,-5,10,0,15,-6,13,5,-6,-9,-3,4,9,-10,2,-3,-9,7,15,3,13,-1,13,4,10,14,3,17,6,0,13,13,10,-6,19,-6,-9,16,10,10,-1,6,14,-2,7,18,10,2,14,-8,6,4,-9,13,-2,4,-5,-9,5,7,11,13,11,16,-9,12,-6,-6,-5,19,-10,-3,12,12,1,-3,13,18,-4,18,-7,12,-10,-6,8,7,19,-8,12,16,18,-4,5,10,18,11,9,0,1,10,16,6,3,18,18,15,-2,19,15,19,5,-2,-4,12,3,-3,18,-6,11,8,4,7,-4,7,-2,18,3,-9,17,12,-9,-9,-8,-10,16,13,-1,0,-4,15,-8,16,-3,18,10,12,10,-5,18,19,-5,14,19,15,11,0,-6,-2,10,-10,-9,9,9,-6,-4,-8,9,0,1,-4,17,6,3,10,10,4,9,13,4,8,9,15,3,19,-7,-8,16,11,11,-5,16,-8,7,-3,13,10,7,0,0,-5,10,1,14,-6,0,13,17,-10,-5,11,-8,-9,19,-7,-9,18,1,5,-3,11,3,10,9,-6,-7,6,-2,0,-6,3,7,4,-1,-10,-10,-9,-6,16,7,3,-5,-2,19,8,1,-4,-5,3,1,6,-5,1,12,2,4,14,0,-5,-7,11,12,-9,8,-5,-2,15,-1,-4,-6,-1,0,-6,9,9,18,14,10,1,-9,-8,-7,-8,-1,18,-9,-8,12,19,6,12,7,14,9,7,6,5,3,-5,8,8,15,-4,19,-5,13,-6,-3,12,0,13,16,8,-6,-1,16,6,2,-9,15,-2,9,6,-5,-4,16,-1,-5,16,17,8,3,-9,13,18,-7,6,-9,14,-9,10,12,-3,-4,-4,10,16,4,-5,13,-8,-5,-9,-6,-1,5,-9,13,-6,13,4,0,-5,16,5,4,17,16,-2,6,11,19,6,13,0,-3,6,15,10,8,-6,-3,0,11,16,7,13,0,16,15,7,6,14,10,12,3,5,-10,15,13,0,-1,1,8,-7,-10,19,-2,0,-9,17,-4,-6,-3,13,8,9,0,4,2,19,5,-9,1,9,18,-7,4,8,14,19,-10,18,7,-6,-3,8,7,-10,9,11,-9,-10,0,7,9,17,-8,19,4,18,11,19,17,9,10,11,10,2,10,1,10,-10,2,-2,0,-3,0,17,-6,-6,7,17,1,6,7,5,8,-3,-10,-9,-1,19,-9,7,-8,6,-8,0,14,13,9,18,16,-9,-2,-4,-9,12,4,19,9,-1,5,-6,1,15,-2,15,1,-7,7,11,17,10,0,-7,-7,15,18,-1,7,-6,12,17,-9,3,17,13,-5,-4,12,-9,-7,-6,-5,-7,-6,13,-9,-4,-3,-8,19,9,-1,-5,1,14,7,19,16,-8,5,-9,10,-9,12,13,9,16,-2,-3,9,5,-8,9,3,-5,6,17,17,15,5,3,17,1,5,13,12,1,10,9,-2,-7,6,8,-10,11,18,-2,15,-5,-2,19,-10,-3,-2,11,4,12,18,6,-9,16,13,12,-8,4,9,-2,2,10,-7,8,1,7,11,9,-1,17,-2,6,1,-6,-6,-8,17,2,-10,13,-2,0,12,0,-10,17,-7,-5,2,17,-2,11,16,5,17,7,11,-1,0,8,-1,2,10,-4,19,0,2,1,-7,17,-1,2,2,-3,16,-5,1,-9,-4,-1,15,2,2,6,5,-3,-6,-6,14,-1,3,14,1,15,-4,0,3,6,12,-2,-1,10,14,-7,7,-4,-10,7,7,11,7,-2,5,0,-3,12,12,-10,-1,2,-10,19,1,11,-4,3,3,15,-1,16,6,0,0,10,14,1,6,-2,2,9,0,3,11,-10,18,9,-7,-3,-1,-1,9,-9,15,4,16,12,14,11,10,-5,14,2,-10,2,17,12,-7,3,4,-9,7,-9,3,13,-1,10,3,15,12,6,1,3,2,14,11,6,-2,7,16,4,-10,-7,-6,18,5,-8,7,16,9,12,5,3,3,14,5,13,11,17,-8,13,-8,7,-3,2,17,-9,13,-6,15,-1,2,13,10,3,10,11,-9,6,-4,18,-5,-5,16,1,3,-8,-5,-9,-6,17,15,17,13,-2,12,-3,-9,-5,17,0,19,2,13,13,-4,18,1,-10,12,0,15,5,16,11,5,6,19,-4,10,11,-9,-9,0,8,2,-5,2,2,0,13,-1,-4,3,7,-1,8,-3,-4,18,9,-5,0,7,18,9,7,10,-2,13,4,0,0,2,11,-3,2,16,-4,-4,6,13,12,13,15,18,-1,13,-6,-6,0,-5,-6,-8,2,10,-1,-7,7,9,-5,6,0,6,11,18,0,-5,17,18,1,18,-10,5,0,7,14,12,8,2,-7,-7,13,15,-5,-2,14,6,10,4,8,14,7,14,-2,7,16,2,1,0,18,6,6,18,16,13,3,6,9,-7,-4,6,-10,-3,-4,0,9,-5,-8,8,2,17,18,-6,-5,5,-4,14,9,-10,3,-6,4,16,19,10,12,19,6,10,-2,17,-5,16,6,17,-6,10,7,9,12,-8,0,3,18,7,-6,19,16,-8,-8,16,12,15,-5,-10,8,-4,5,4,16,13,6,4,13,17,12,13,-6,11,-1,-7,11,15,17,16,0,5,-2,11,-4,-7,3,-9,19,11,-5,-6,0,9,-2,17,1,-9,-1,11,-2,14,-9,16,19,6,-2,15,18,16,7,12,-7,8,7,-3,10,0,4,-7,7,13,1,19,14,5,9,-10,-5,12,-4,13,4,10,3,5,-8,19,-8,-5,-1,-2,10,2,5,17,6,7,-6,13,14,4,5,1,15,15,10,15,-9,4,-9,9,7,9,11,15,16,-4,-2,19,13,13,19,8,11,-2,12,-2,-5,-8,-6,-10,8,18,15,17,15,14,11,4,-1,-9,0,18,10,-1,5,2,-6,0,1,6,10,3,-1,10,-1,12,-1,0,6,8,-2,19,-10,7,17,11,-10,-3,-7,9,5,-4,1,15,-8,1,1,14,16,2,12,-4,9,12,19,3,9,14,7,16,13,1,16,8,-4,2,12,5,3,14,6,6,1,2,-10,-4,19,15,4,12,3,14,-9,-8,7,19,6,10,17,0,-3,19,-6,18,19,-6,-9,-3,17,-3,12,-2,15,10,14,16,-6,13,14,8,14,-5,-10,17,5,10,-4,-4,10,1,17,6,-4,14,1,-5,-1,3,18,8,13,12,-3,1,-4,2,-3,-3,7,-1,8,9,16,2,19,0,-2,-1,0,11,-7,15,-8,16,13,5,2,8,15,14,12,6,-9,-8,-9,11,0,-1,2,15,-2,1,-1,1,-8,18,18,-3,15,-6,14,12,-5,-6,0,10,9,13,11,16,8,10,-9,0,9,13,15,7,7,10,13,8,19,13,5,-2,-7,-5,14,5,-10,8,-3,-9,14,16,6,3,-8,12,18,-1,8,-1,-3,2,7,7,7,-5,7,8,13,13,19,-10,-6,2,1,0,-10,17,-9,12,17,17,16,10,-7,1,10,4,-7,-9,-4,18,-1,9,8,12,-1,19,14,15,7,6,17,9,5,-1,-7,2,15,10,-7,4,-2,4,-9,-3,17,-10,-6,9,12,6,5,0,16,4,-7,19,13,15,6,6,18,-9,8,4,6,2,-3,9,-1,-8,18,15,-9,-10,5,7,11,19,-1,0,4,7,15,0,-2,-10,13,12,-6,-7,17,8,18,2,-7,10,8,-3,3,-4,-6,-5,-8,-1,0,6,-2,10,9,17,14,7,15,-3,6,3,9,7,16,5,-8,14,15,-4,15,-10,1,2,6,-8,1,18,-5,-9,17,16,-8,14,-2,-10,-2,10,-1,14,17,1,18,2,12,-4,-9,12,-8,19,7,-7,-7,10,15,0,3,-10,-9,8,5,13,19,4,15,-7,9,14,10,13,17,17,11,-5,1,-10,12,0,8,-7,17,15,17,-7,12,-7,-10,16,10,15,-1,-9,8,5,15,5,13,3,-7,-5,8,-1,-7,14,-6,8,19,11,-8,9,-9,-1,0,-6,8,1,0,-1,5,7,16,13,13,12,12,-7,11,8,9,-2,-1,13,3,-9,-10,18,4,17,0,4,-10,6,3,-2,-8,8,0,4,0,13,19,2,11,6,-3,-8,6,4,9,11,0,3,-5,-8,1,5,8,14,-1,-2,6,-8,14,-4,12,8,-10,-5,15,7,18,14,-3,5,9,11,-4,11,-1,11,-6,6,6,-7,14,-3,7,-10,11,0,-7,19,13,-10,17,3,4,3,-2,6,6,11,-3,-8,-1,19,13,-2,18,16,15,-9,-5,13,5,7,1,8,9,-7,-8,9,9,-1,16,9,-4,-4,-10,15,6,-4,17,9,-2,-6,10,6,10,5,0,-2,15,-5,15,16,18,16,12,12,12,-4,-8,-6,-6,7,15,9,-3,-10,-9,-9,9,8,5,19,-5,-3,14,6,2,19,8,-4,12,-1,16,10,9,7,8,8,2,12,-8,-1,4,3,11,13,-6,11,2,-3,10,18,9,12,4,-3,14,-2,-7,2,12,15,8,-6,3,-3,12,3,8,10,-3,2,1,5,-5,11,12,4,-3,-4,-10,5,17,-2,9,11,14,3,-10,18,9,15,19,11,17,11,10,9,10,-2,-10,9,13,7,15,4,14,-9,11,15,6,-2,-4,-9,-6,-10,-7,-5,14,-6,-1,10,-9,-4,3,1,10,6,13,12,-6,0,6,16,4,3,12,-5,2,17,-8,17,-9,10,15,-3,-7,13,9,11,6,-8,8,18,16,-1,-5,14,2,-7,-3,4,8,2,8,-10,12,-8,13,7,13,3,13,14,-5,0,9,-1,11,-3,15,17,1,-8,10,10,-8,19,16,3,11,-9,-6,-8,-10,18,-2,0,-1,1,19,-3,3,-7,10,-7,7,15,-7,17,5,2,7,-4,-6,5,-4,5,-9,1,-4,19,-10,2,16,10,15,-5,-4,17,5,19,-7,13,2,-4,18,15,17,6,1,2,1,-5,5,7,7,-8,-7,-6,-8,9,-5,18,8,-6,0,-10,15,-1,-2,9,14,9,-5,-8,13,10,17,-1,-3,15,-10,8,13,6,-5,5,6,7,6,9,-4,7,-3,11,-3,1,-5,4,14,2,8,-3,11,14,12,8,9,-6,4,10,11,17,0,7,-10,7,-9,17,16,14,10,19,11,-1,4,5,5,-1,6,8,4,-7,10,10,14,-2,-2,11,-6,-4,17,12,-1,-5,-4,0,13,-7,8,7,-8,3,14,-8,1,-7,-2,9,-3,-8,10,14,13,-8,5,-3,-10,16,6,9,0,14,-1,4,17,7,10,8,12,16,1,0,10,-7,3,-9,12,17,-5,-8,-10,6,11,-10,17,-5,-2,17,18,-1,-6,4,-10,2,-4,17,4,0,0,15,-7,14,-2,-1,5,-2,18,-4,-3,-7,15,-3,-10,19,4,15,16,12,3,16,4,15,7,-3,-1,-6,-3,0,5,7,19,-10,16,6,4,17,8,2,6,0,-3,12,-10,-4,2,15,-5,13,2,5,7,-7,-1,-5,14,-6,19,17,12,8,18,12,-5,-8,-10,-2,-3,5,15,8,-6,14,-8,8,-7,2,-9,0,13,14,-7,11,8,1,7,4,10,11,4,8,-3,2,1,-2,-4,-1,2,-6,11,15,8,-7,-2,14,-6,-6,18,14,-3,-8,17,1,1,-1,10,9,6,4,12,2,16,11,10,12,-1,12,7,8,10,-6,11,12,-6,-6,-9,10,19,16,-4,-8,6,-9,-1,12,12,-5,4,10,6,10,-9,-3,-8,12,4,1,13,-2,7,-5,8,7,-5,17,14,10,-7,9,0,10,-5,14,7,19,2,5,-5,7,16,7,-1,9,2,5,11,7,-3,-6,12,15,10,-7,7,19,8,-9,0,-3,-5,3,-6,7,0,1,-9,10,-2,-4,4,7,13,8,-7,-9,-4,0,-7,6,12,16,4,-8,16,18,-1,14,10,3,1,-3,15,0,-3,1,9,17,0,5,11,3,19,3,-7,2,19,13,14,-2,16,4,18,2,9,17,18,10,-8,19,13,14,4,5,-2,-10,-10,-2,14,9,4,-8,12,12,11,14,14,-8,-4,12,6,5,-8,13,15,8,12,5,-8,-6,2,-2,11,-6,-7,17,11,-3,17,-4,14,-2,-4,1,8,7,18,6,6,5,-1,0,11,15,14,4,2,-9,12,-3,14,-6,19,-7,12,0,0,5,13,1,8,5,-9,8,-5,-3,14,-9,2,17,17,4,-4,-10,11,13,5,-1,10,-8,-1,4,-5,6,-5,5,4,-5,-10,1,11,-3,8,-4,-10,-6,16,13,-5,4,-3,4,-9,9,-3,-9,3,-9,5,6,1,-10,19,-1,3,12,12,2,-9,12,2,-2,16,-5,-1,-4,5,4,-1,2,14,4,-1,7,-1,5,8,8,19,4,18,-2,13,6,-1,-2,19,-10,8,8,0,12,12,17,-7,-5,-6,14,-6,6,2,-10,16,-1,-4,9,9,13,6,-1,18,5,-3,11,10,-9,16,3,-7,0,-3,8,-5,-3,14,1,-1,5,-8,11,11,15,-6,16,-10,-1,7,-10,6,0,12,11,4,-1,7,9,4,1,-5,3,6,-2,5,8,9,4,9,-4,13,13,-2,2,0,-6,16,-7,15,9,2,-8,16,19,5,-5,-8,-1,0,2,10,9,-10,5,14,5,4,-8,-2,12,-6,3,-4,10,1,14,-4,7,9,7,-2,13,3,6,15,18,-9,-3,-8,19,10,12,19,6,17,16,-4,-5,5,12,2,-8,-1,15,-9,8,14,10,11,18,-3,-1,0,7,-3,-5,0,6,-4,18,5,14,-2,12,9,8,15,-1,1,0,8,1,2,-1,-7,2,14,13,8,4,2,15,12,2,3,7,12,16,-5,-6,-4,8,16,4,4,19,10,-6,-3,4,-6,8,-3,12,10,4,-9,13,18,5,0,-6,7,0,-6,17,10,11,2,12,-9,19,9,4,6,-3,-6,5,8,16,-1,-7,2,3,-3,-10,17,3,-7,17,-1,-8,15,19,6,-9,14,16,7,10,14,0,15,2,7,16,6,4,11,0,16,3,9,-9,18,14,-5,-9,6,13,18,10,8,-4,8,-5,-4,1,15,-5,17,-2,-1,1,7,-2,-5,14,17,-5,4,-4,10,13,-3,5,5,-7,7,-5,-7,1,-8,-5,-7,-1,17,16,9,-2,-6,5,-8,13,19,15,11,15,-2,16,-6,15,7,-1,8,14,1,12,18,-10,5,4,12,-4,19,7,7,10,8,5,-6,-7,-8,11,15,1,-8,12,3,12,6,-9,18,-1,6,16,11,9,7,1,8,11,15,19,9,-5,-3,-2,5,-1,17,-6,0,11,11,18,-3,4,-3,7,-2,6,17,10,18,13,10,17,-9,-8,-4,-4,15,5,4,-3,18,0,18,-5,18,6,-7,-5,9,7,13,19,-1,1,5,12,9,-4,-8,10,-6,7,-5,-6,7,12,-5,8,2,16,15,15,9,6,10,1,17,18,3,-9,-4,12,4,-4,1,12,2,2,7,3,-4,9,3,8,-4,-2,17,7,18,16,7,13,-8,7,14,8,-6,-2,3,-1,0,4,12,-3,1,4,15,-1,6,11,-7,17,18,13,17,18,1,17,7,14,-5,-10,-9,11,17,1,-1,3,9,17,-7,1,-1,6,-9,-8,1,-8,6,18,0,19,7,1,0,13,19,3,2,2,17,-10,4,11,-4,-9,1,-7,-4,14,5,15,10,-8,9,12,-7,6,7,12,-7,11,14,3,-7,4,6,11,9,1,4,-9,-9,13,-5,-2,-3,-10,-5,-9,-6,-3,8,15,-1,0,4,0,6,16,-6,-5,-2,-10,16,5,3,5,9,13,4,-6,-9,6,3,4,18,9,0,10,-9,12,8,15,-2,14,-5,3,7,8,18,-6,-10,0,7,18,-7,1,-4,3,16,15,19,0,16,2,-3,10,18,-3,-2,-6,5,-6,16,9,-9,-4,3,17,-8,11,16,4,11,1,1,5,4,19,2,17,-1,13,9,0,-8,3,11,2,8,-7,3,8,-1,9,-9,10,-7,19,8,5,-9,5,-1,11,1,9,-3,3,13,13,14,11,-2,-3,4,0,13,13,6,1,16,7,-10,-2,14,8,-3,-9,-9,-10,9,-1,9,-8,19,-3,13,19,8,4,18,14,14,0,-6,15,-10,18,5,14,18,-3,-8,-2,8,10,19,13,-5,10,-2,-6,2,-9,3,-2,-9,11,-2,9,8,-10,-5,13,9,17,-10,3,-10,12,12,0,0,11,-1,3,-2,9,8,5,-1,-4,16,6,12,7,17,-10,2,2,5,14,-4,16,3,18,-5,-10,8,11,1,4,-3,0,2,5,-10,-8,15,1,5,14,14,-2,19,11,5,5,5,7,4,4,-2,5,8,-2,-7,5,-8,8,5,9,19,5,-7,19,-1,13,-10,-2,18,17,-1,-2,-2,-5,6,17,-6,8,10,-4,-10,-6,17,1,19,16,-5,14,4,-1,-10,-5,18,-9,6,4,-1,13,13,-2,-2,-2,6,18,-7,-8,14,10,7,0,-4,11,-10,-7,-5,18,-1,4,-5,-7,-7,-8,-7,-9,15,12,6,-7,-1,19,3,11,-7,-1,14,7,-5,4,10,5,5,-7,-9,9,0,-8,7,-8,3,4,-2,-5,-9,-3,13,9,15,6,7,18,10,4,3,7,16,-7,-4,-4,-4,-1,4,15,11,19,0,7,0,0,8,19,-2,-8,15,-4,-2,12,-2,-3,13,7,14,5,-2,-10,-6,14,19,6,17,14,0,14,-4,-7,8,15,12,-1,-8,4,18,12,-1,5,16,16,16,8,18,16,3,-5,18,-1,13,-4,18,0,11,19,13,18,9,0,-7,-6,19,15,13,9,11,1,3,13,17,-1,-3,6,3,-7,-7,10,10,17,9,-9,-1,15,3,4,-3,6,8,11,-1,8,-6,-10,-5,8,11,-3,7,-9,8,12,15,8,14,14,19,6,-1,17,-6,-7,14,-6,19,7,8,18,18,-1,19,0,18,-7,-5,14,-3,17,0,-9,4,11,-6,14,10,10,18,7,12,9,2,8,4,1,-5,-4,-8,19,6,4,-8,9,13,4,-3,1,9,5,-2,12,17,0,0,10,11,18,13,19,16,1,18,-6,9,-4,18,-7,6,11,1,9,4,1,12,-4,18,-3,8,15,-8,1,1,11,7,4,18,-6,15,17,5,-10,10,0,16,18,-5,-3,13,17,-10,19,11,-4,8,2,7,1,2,-5,8,-10,0,3,14,11,18,14,8,-10,-5,-10,2,9,-8,11,16,13,-2,0,8,-4,-3,7,6,12,8,8,-4,9,14,-8,17,1,-7,18,3,18,9,-2,16,2,-4,13,1,-2,3,9,5,-6,-2,18,-10,4,-4,5,16,19,15,-4,16,-2,12,-1,10,-9,-3,18,3,4,-2,0,6,-7,-2,6,10,19,4,-9,11,17,-2,14,11,-3,-3,5,1,-2,4,-4,-2,10,12,11,-1,17,18,0,-10,-7,11,15,-8,11,4,6,12,16,7,2,3,15,-3,9,-9,17,2,4,12,-1,-5,16,19,14,1,-3,-5,-7,-5,15,2,11,-3,3,5,10,-9,4,14,0,18,1,-9,-5,0,15,1,8,18,-6,3,0,5,13,-8,10,-3,-5,-3,0,-9,-1,8,14,14,10,9,7,1,5,2,-5,1,19,3,11,-7,-8,10,9,12,-1,11,4,-7,7,18,18,14,3,5,7,11,7,-2,13,11,-6,17,4,6,16,15,9,-1,4,7,16,12,-3,14,8,-6,19,6,16,-2,0,-8,-8,-4,-9,11,-7,11,-6,19,4,-2,6,9,-6,-1,17,5,8,13,4,18,19,6,-2,11,-9,-10,-9,11,-2,9,-4,-9,2,-3,-10,-3,15,7,-8,4,13,19,10,-4,19,1,3,14,2,-9,-8,1,17,-8,19,16,-8,1,-4,6,-6,11,0,-4,-6,13,-6,-1,3,-6,0,-8,10,17,-2,-8,-7,-4,-1,5,-10,-1,2,2,5,18,4,-6,19,-5,0,5,6,11,-5,0,11,15,19,9,8,2,11,14,13,11,1,-3,11,5,11,17,8,4,-3,-1,-2,3,18,16,-7,19,-7,10,1,8,0,-7,13,-5,18,-3,-5,8,-3,13,1,-9,13,5,15,15,4,15,12,12,-5,5,-7,13,16,16,0,13,-7,19,4,17,19,-6,10,-3,19,17,-7,11,-9,10,16,3,8,6,6,-10,17,-8,6,13,-10,-1,-8,-3,9,7,2,-1,0,16,-5,11,13,1,-10,6,10,1,3,-7,14,-10,18,16,-3,18,12,-8,6,17,8,0,-1,1,14,-6,13,1,-1,-10,8,11,12,13,-7,-7,11,8,16,-10,1,-9,-5,0,-9,-4,-4,19,8,-4,-4,-5,18,18,2,6,2,10,17,0,17,11,14,-4,6,-5,3,0,2,1,7,15,18,19,-2,1,3,1,-9,3,-3,17,6,5,1,-9,9,3,8,11,4,-1,8,-8,19,7,-7,10,0,1,19,5,1,-2,-9,-5,12,6,9,16,-5,12,3,11,0,-4,1,-1,2,14,13,6,-6,16,2,13,13,0,-6,7,-3,3,-4,0,-7,18,9,-8,14,-8,13,0,0,19,5,9,11,2,4,-7,-3,18,8,18,8,-1,-4,7,8,-9,2,0,-8,-9,-1,14,19,-5,15,13,-6,18,3,13,12,-9,-10,-4,18,10,4,17,15,17,0,-7,-1,13,-6,10,14,-1,-5,5,2,0,8,2,15,-8,9,-5,7,14,19,-3,-9,-4,-9,4,19,-2,-5,12,13,-6,14,16,19,13,-10,16,-1,-10,-4,15,2,-7,-9,12,-9,19,16,17,4,-7,-9,-5,-2,1,7,19,3,-1,-4,18,5,19,-5,15,5,-2,-3,8,8,1,16,1,8,1,-7,-8,0,17,5,-2,9,19,8,-3,-7,7,18,-10,7,-9,-5,-9,5,-9,6,17,-4,19,13,11,12,10,-6,-6,-3,19,2,0,-4,10,17,7,11,-4,11,19,16,-4,13,6,1,11,16,-7,7,12,15,1,-10,11,8,3,-1,16,-9,4,16,-8,-6,13,-9,-6,-3,-7,17,3,4,11,0,9,16,7,2,3,-5,8,19,-6,7,-7,6,-5,2,-2,5,-1,14,7,0,13,-5,12,-8,-1,-10,-8,-1,-4,-6,-5,17,4,11,3,-5,9,14,17,-2,-1,19,13,-7,3,-9,13,16,2,-4,18,15,11,-9,-3,-3,9,3,-1,18,19,-10,7,19,-5,-3,3,14,10,13,3,14,15,10,4,7,0,-7,-2,-4,-4,15,12,-4,14,1,1,16,16,-2,3,-7,17,-2,-3,-7,8,13,-10,-10,2,-3,11,13,16,-9,-7,-5,-8,10,3,14,19,-10,5,10,13,7,6,2,12,18,-2,7,15,17,1,-1,5,19,17,14,-1,18,13,-4,6,16,4,16,4,1,5,6,1,14,5,3,-4,11,14,13,11,6,6,18,10,-10,3,-9,16,0,-2,19,14,2,0,-9,1,-2,-6,-8,12,18,19,10,8,9,5,16,-8,-3,4,3,-3,10,-8,19,11,-5,17,14,-3,5,-5,16,0,-8,0,13,2,-6,10,-4,1,-3,5,-9,12,-8,-2,17,-1,5,12,5,3,17,-1,-5,1,16,-3,-4,-10,7,13,11,11,19,-9,-4,17,5,12,5,17,8,17,-1,-9,-7,9,11,2,3,13,13,-7,16,-2,14,-1,-10,4,3,11,13,19,-8,15,1,-8,0,1,18,12,10,-5,5,18,-4,7,16,0,-1,4,2,-4,19,2,8,-9,17,13,6,-4,2,-10,4,-8,-4,-5,15,-4,-3,-10,-1,-5,-4,19,19,0,3,-3,5,7,-10,-10,18,10,17,2,-2,6,1,8,-6,-9,19,-9,4,8,-2,-3,-5,-5,3,-1,-7,18,15,-8,-2,0,16,4,8,5,5,-6,-7,14,10,10,9,-6,-2,-8,15,10,-2,-4,2,17,17,7,-5,-7,5,14,13,19,9,-3,16,4,-5,14,2,1,0,8,0,15,9,16,18,9,7,-2,-5,-6,19,19,3,-5,10,-8,-4,15,2,6,0,1,15,5,7,0,9,-10,5,-3,-2,15,14,13,17,-5,17,6,1,-9,18,19,-10,3,12,-1,1,-4,4,-1,6,14,5,17,2,-9,15,11,2,-7,-10,18,8,2,-3,-4,2,-8,15,16,14,-1,3,19,15,2,-6,6,-5,-8,18,8,-5,14,-9,-1,11,2,-1,0,18,7,18,-3,-2,9,12,-6,11,-5,-5,-5,9,-3,18,16,6,9,3,-7,-9,-2,3,12,-5,3,13,7,3,13,11,13,-6,11,-2,-9,10,2,-1,5,-1,8,18,-4,19,5,-5,13,4,-5,-6,17,13,10,-1,1,8,-2,-1,18,12,2,14,10,-8,15,5,3,7,2,-5,5,-2,13,19,13,4,-1,10,-7,-8,14,12,18,17,3,-8,-4,13,9,0,-9,2,-9,-5,2,8,19,-1,4,-5,14,-2,-4,-4,-10,-4,-1,-5,2,17,10,11,5,-8,-8,-10,1,-5,7,10,6,9,12,-4,19,15,-9,-1,17,15,9,12,19,15,15,12,1,16,-3,11,13,-3,-6,1,1,3,-8,14,-8,10,7,-4,-9,6,7,4,-8,-4,0,3,17,-8,17,-4,9,17,2,-7,-6,-4,-3,14,5,3,4,-10,-4,1,4,-5,17,9,9,1,8,18,15,18,6,3,5,10,17,-5,11,6,11,6,9,18,-1,9,13,1,17,7,-6,-4,4,-7,0,7,-7,-2,15,-5,4,8,-3,-6,-6,10,12,14,1,-5,-8,11,-1,12,7,6,2,10,8,11,2,8,4,-9,7,12,18,14,3,13,1,5,-6,15,-8,-7,10,-5,-2,-4,-7,11,17,-8,4,17,4,-6,6,-1,-3,5,17,16,6,10,1,17,7,2,-10,-10,17,-7,-8,10,-8,4,15,0,8,18,3,-7,14,9,-4,13,-8,-9,-6,3,10,1,15,-8,-10,-10,8,11,-7,-7,12,14,-6,9,5,0,-7,0,8,-6,-6,8,13,8,14,7,2,9,-3,5,14,5,6,18,15,-6,14,6,12,0,18,5,-10,11,-6,13,-10,4,14,-3,10,5,-10,13,1,7,16,11,-3,-5,19,16,13,14,-8,7,-7,17,8,-2,-10,15,14,-8,-4,13,-5,-3,1,-4,6,16,12,16,9,-3,5,16,12,-9,-10,-7,2,19,9,15,8,4,12,4,-5,10,11,4,10,18,-7,18,15,-4,-5,-1,-2,4,11,7,7,14,3,5,18,6,16,-7,8,18,19,16,6,12,-6,17,0,12,17,1,3,-5,4,10,8,-3,16,0,14,7,0,0,12,11,3,11,15,5,-10,18,9,18,-9,14,7,3,16,0,10,-3,-1,2,18,11,12,4,-6,-6,-2,9,10,8,4,10,13,4,-6,-4,18,5,7,2,13,17,8,18,0,4,-10,6,6,10,-1,5,11,-6,17,8,4,3,-1,-3,7,8,-8,10,3,19,16,-1,0,18,0,-3,12,-1,2,-9,-5,-1,-1,-7,7,-6,-8,1,0,-4,-10,0,8,6,11,-10,-1,19,15,18,8,11,0,1,9,16,2,19,8,15,3,-4,-1,18,19,-3,7,1,-10,-10,4,18,14,-8,18,-9,12,-1,17,-2,14,-7,-10,18,-3,-4,-3,-1,0,2,-8,-10,7,8,2,-9,19,4,-3,17,12,19,10,-8,-2,18,19,9,12,-4,14,16,14,0,-2,0,17,13,15,16,-5,11,18,-3,0,2,6,11,17,-4,-5,8,18,7,13,-6,11,14,-6,12,5,11,12,10,14,-3,16,3,3,18,-8,1,-1,-9,-5,-7,12,8,7,-7,16,13,13,-2,8,-10,5,-3,14,-9,7,-8,7,-9,-6,4,6,17,12,4,12,11,2,2,-7,4,-3,13,-7,-3,9,8,11,10,8,-4,14,11,-2,-4,-4,9,8,-2,2,2,10,4,11,14,11,4,16,15,-10,2,-3,19,4,14,-7,8,18,-6,15,-9,14,13,0,10,11,-4,2,-2,7,2,8,13,19,16,3,-1,16,10,-5,13,10,0,6,15,3,-2,8,3,-2,6,-3,-4,0,13,16,19,-5,19,17,-5,-9,-5,-1,10,14,-7,3,10,7,0,-7,13,16,-3,-4,2,8,-5,1,15,-1,9,2,15,2,18,16,-8,-2,8,14,15,-3,5,5,-1,7,15,-3,1,16,19,-4,2,16,13,-6,13,10,10,-2,5,-7,17,-5,12,18,18,2,-1,16,8,6,-4,15,-6,10,-4,0,-10,-2,15,-4,14,1,-9,-8,-1,-8,14,-3,12,6,18,13,-8,12,12,11,13,10,11,-6,-7,-6,-1,11,0,17,-4,18,15,-1,-10,9,3,15,-7,0,-10,-6,12,7,19,-1,9,11,11,-8,17,16,10,6,4,-1,8,7,8,4,13,2,3,4,-5,5,4,2,-8,-6,15,-3,10,-9,-6,15,6,6,11,-10,-8,1,3,5,11,14,-5,5,0,1,3,12,2,12,8,-6,5,-7,9,6,5,9,14,4,16,0,11,10,6,13,-7,17,5,-4,2,0,8,7,11,5,9,13,-3,17,8,-6,2,19,18,0,13,4,4,5,18,-4,17,6,19,6,0,-1,15,0,10,19,-8,18,-10,-5,9,-6,12,1,18,7,5,-4,10,5,4,19,10,1,12,-2,4,-9,4,2,9,1,4,11,12,-7,1,17,1,-9,1,-7,12,2,-2,-4,-7,0,11,-5,12,0,17,7,-4,-10,0,-3,-5,1,3,-3,3,6,16,13,15,1,4,14,15,-4,8,14,4,-9,-3,-10,17,14,-10,4,17,18,16,1,8,-2,14,-10,-6,-2,10,14,11,-9,6,14,-7,-1,4,13,5,13,1,10,-6,-8,-4,-10,7,-3,14,-7,8,4,4,18,-2,-10,11,5,14,-3,10,7,9,-7,-7,1,11,-7,4,2,-1,4,-6,-4,-7,16,0,-3,14,1,10,6,8,7,-2,1,-2,13,-10,17,7,3,-3,2,-7,19,15,10,-3,18,-2,0,-3,14,19,1,4,1,12,0,18,-10,0,19,18,-6,-7,-6,1,-5,0,-4,2,-3,1,14,-4,-4,12,13,16,13,-7,12,10,4,6,-1,-4,12,2,17,-6,4,3,2,13,18,-7,17,16,15,3,-3,-4,-8,14,10,12,13,19,-5,3,10,-1,1,-6,18,18,-1,-5,18,-1,-6,2,17,11,-4,14,3,9,7,1,-4,3,12,4,-6,-8,4,-7,15,-10,11,5,11,15,0,19,8,18,2,-4,-1,-10,-8,4,-10,-2,0,-3,14,10,-10,1,-3,-4,3,-3,5,17,17,19,1,17,11,3,-1,-8,10,-3,1,-10,8,12,11,19,-2,-4,3,-7,4,9,-3,8,1,2,2,-9,12,7,17,1,11,-4,8,17,10,3,3,6,14,8,5,8,19,-10,15,-9,-6,-6,-2,6,-4,11,19,15,15,15,9,2,-7,7,15,-4,0,11,3,4,3,-4,-1,10,17,0,-3,14,-10,7,4,-5,-6,1,-10,-7,-8,5,17,0,-2,16,-6,17,10,1,18,12,-3,16,0,-4,2,7,4,3,18,17,9,18,10,18,-2,-1,13,-1,4,8,3,4,17,17,-1,14,-3,17,-6,9,-9,-7,-5,-1,6,-8,4,-5,17,12,13,-2,-3,-3,15,-2,16,4,-8,14,0,-7,-5,-2,8,-6,-10,12,5,12,11,7,4,-1,19,-10,9,18,6,5,-2,8,9,1,-2,19,4,1,19,1,2,-2,-4,-7,14,1,12,9,2,18,8,-1,16,-5,-5,14,-5,15,3,-8,6,-1,-5,7,16,18,4,5,10,13,19,10,15,-7,9,11,7,-3,-3,-10,-10,8,15,14,9,6,6,18,3,-4,15,-10,11,-4,1,9,-1,3,-10,-7,1,-2,8,16,4,-4,17,17,10,8,-5,-9,3,1,0,18,-2,2,-9,7,17,-8,0,17,-9,3,7,1,8,2,-7,9,14,13,-5,-8,13,-1,-10,-3,0,3,-8,0,16,6,-9,14,2,16,0,3,19,15,12,-1,2,9,5,4,-8,-6,9,9,1,6,9,-8,-9,16,-9,-5,-3,-10,8,13,9,7,17,19,11,-3,2,-1,16,17,1,-10,-6,5,10,-7,7,7,2,3,17,-4,-4,1,-8,19,-9,-7,-7,14,6,9,2,3,10,-7,-10,9,5,12,9,14,8,17,9,-10,-3,-5,18,9,16,-1,12,-10,12,6,11,-6,-2,18,10,16,19,-8,18,0,1,0,12,-9,0,2,7,4,5,6,-9,19,12,18,-5,8,-4,-7,7,15,-6,2,19,0,-2,-4,-10,-3,-10,-2,-9,7,-3,9,7,-4,10,12,5,14,4,13,8,12,1,19,19,13,-3,14,14,18,19,-2,19,-1,8,7,-1,14,15,2,5,18,-5,-6,-9,19,-7,-2,18,0,18,17,4,18,1,5,7,-2,15,-3,3,8,4,12,2,-4,10,-8,-3,-7,6,7,17,4,2,11,14,-5,-4,17,16,-10,16,12,19,2,11,18,4,2,14,8,2,-3,19,8,13,4,-7,-1,-2,-9,19,-3,7,-2,-9,3,-2,17,9,-6,6,2,14,6,19,12,19,-10,3,-6,-10,1,5,-4,4,-7,-7,8,-1,13,-9,15,13,3,2,18,4,-9,-1,2,-10,10,19,-2,4,-4,4,19,3,-10,-3,6,0,5,-4,14,-8,10,5,-5,6,8,-4,-8,11,0,10,12,-5,-8,-1,-2,11,-4,8,9,-5,14,13,12,-8,6,-7,18,3,11,15,9,6,10,14,-1,-7,-6,-8,-9,2,-3,13,13,2,-5,4,4,4,-6,-1,5,1,10,4,4,13,10,1,7,1,19,4,10,3,-2,18,5,16,11,-5,0,7,-10,4,9,7,-5,-2,13,3,14,3,8,-6,10,14,2,12,12,0,15,4,-6,7,1,15,6,15,19,14,-5,9,-8,4,16,15,-6,-2,5,10,8,19,11,0,-10,13,15,3,9,12,14,0,-10,-5,-3,9,16,16,-10,6,15,-8,-1,13,19,17,18,4,8,3,10,15,6,1,16,13,15,19,14,-4,-10,-10,2,-8,2,11,-3,16,6,2,1,9,18,-4,10,-3,9,-10,-4,8,-1,-9,12,19,5,12,0,-9,14,4,-10,5,-3,8,-8,-4,15,14,10,15,2,12,-8,14,18,16,14,-4,-6,-2,13,-4,3,16,-1,13,8,10,-4,5,-4,-10,15,8,7,19,0,-9,-7,-6,2,18,2,-10,8,17,-8,2,-5,17,12,18,-2,-8,14,12,-3,13,2,13,-2,-10,17,18,0,-3,15,19,10,-7,15,11,15,0,16,4,4,17,7,-3,17,-10,-2,-9,3,10,-7,-10,4,2,8,9,5,4,9,8,18,-1,-8,16,-4,-5,-3,16,14,-3,4,-4,-6,-2,12,-2,-2,7,-2,3,15,17,-10,4,-9,0,-3,-7,12,9,10,17,13,13,3,18,-4,3,5,8,9,6,19,15,9,-10,6,13,-1,10,9,10,19,13,17,16,-8,-10,7,6,7,2,-1,7,9,-7,2,7,-7,16,9,-7,12,6,-10,13,-8,-10,1,18,12,15,18,-1,-7,18,10,-10,13,-8,15,1,2,17,8,-2,-9,-1,4,13,3,11,-5,9,6,15,3,11,3,19,14,4,0,6,19,-9,0,17,-1,0,-7,6,12,-7,-2,-8,6,-5,2,14,18,9,2,-5,-2,5,-9,11,12,15,-1,16,5,9,3,7,13,19,15,14,3,8,12,12,-9,14,13,18,-1,7,8,-1,19,2,11,13,-2,4,-7,-10,-8,-9,6,-10,6,17,15,19,15,1,15,18,-2,0,-1,6,-5,14,15,3,7,-8,-5,-2,18,14,5,2,-7,10,5,-8,-3,1,3,-6,5,19,5,-7,18,-1,8,17,4,13,-10,12,0,19,6,14,-5,8,9,-7,11,5,2,19,-7,15,15,-1,17,-2,-1,11,-1,-10,9,-5,15,18,19,2,11,0,11,-2,-3,0,-10,18,0,-4,18,4,1,11,19,-3,16,3,-5,9,1,6,16,-2,-10,18,-1,6,9,-7,9,17,6,4,4,-8,9,6,3,-2,16,12,14,14,9,4,-7,15,5,-7,6,-4,-3,5,16,-6,-1,-9,-1,11,9,0,-6,7,7,-4,11,12,3,2,-9,0,-8,9,-3,5,8,-2,15,9,2,14,8,18,-8,-9,-8,5,17,-8,-1,16,19,19,-9,13,15,-9,6,2,-8,6,8,6,-8,5,16,2,-5,10,2,12,3,14,-7,6,8,7,-8,18,3,-3,-2,-4,0,13,3,18,19,13,-3,-7,9,8,18,17,9,-6,-5,-9,4,17,-8,0,6,15,-3,15,2,6,8,-3,-6,19,5,1,-5,-3,4,5,14,7,7,13,-10,2,-4,12,1,5,13,3,-10,1,3,12,15,-4,-9,3,13,15,15,11,12,19,12,17,3,18,1,-1,9,13,-1,11,12,0,15,16,7,9,10,12,19,-4,-2,18,-7,11,3,-9,-5,18,12,12,-2,-3,15,-2,17,2,11,3,8,-1,17,15,-4,4,5,-6,8,-8,-6,10,-7,-8,10,17,13,2,-5,7,13,5,1,13,-4,-9,14,0,13,-3,6,18,-2,-10,9,12,-4,-3,9,3,6,12,9,13,-2,-5,-8,17,15,10,8,11,5,-7,13,14,6,3,-1,16,0,-6,13,15,15,-8,18,16,14,-5,-9,0,-5,18,3,-3,-8,1,-5,-6,1,4,14,-6,-7,9,13,-7,4,-2,-7,16,-9,18,-9,3,-5,18,4,-10,-7,-5,0,7,2,4,-7,-4,10,1,5,13,-7,16,12,-2,-7,-2,7,5,3,8,-4,12,14,13,0,15,8,11,12,9,5,18,13,0,3,2,8,12,-4,15,3,4,16,-8,-4,12,7,-6,-10,6,11,-5,0,16,12,19,13,-9,-3,-9,2,1,19,8,0,4,10,13,14,7,19,-6,14,-1,0,-3,17,-10,4,9,19,8,4,15,-2,3,-7,4,11,0,0,8,12,16,18,-8,-2,17,-5,-2,9,-1,16,19,-2,-5,-8,1,-6,-4,4,16,7,4,6,4,4,-5,-10,-4,-1,2,5,6,15,-8,-3,10,2,16,12,5,3,8,11,-6,7,3,-8,17,4,2,14,16,-5,7,-7,0,15,-6,17,19,-7,4,12,-4,-3,9,15,8,7,-1,3,12,10,14,9,6,14,-1,10,10,-3,14,-7,19,-7,15,8,19,-7,2,-7,16,0,-4,1,16,18,9,12,-10,12,5,14,-7,-3,2,10,11,19,-1,-5,0,-1,8,12,-5,-3,4,12,-6,6,-7,9,2,7,19,-5,4,16,18,17,6,-9,16,6,9,-5,4,12,13,6,-6,4,-1,7,9,16,17,-6,17,11,8,0,16,-3,-7,6,4,7,12,-8,-5,15,-10,4,1,1,-9,0,17,7,-6,19,10,-9,-1,13,17,1,18,9,6,-4,-6,19,1,10,-9,8,-10,3,-8,-2,3,-8,-3,18,11,5,11,13,11,9,12,-2,5,-3,13,3,11,6,12,-9,19,-10,17,0,7,19,-2,11,12,18,10,-8,6,3,-10,-5,7,-2,4,-1,11,7,-9,11,4,-10,7,-4,5,10,6,7,-5,1,2,0,5,1,0,10,-9,-1,-3,19,17,-10,18,-3,-4,-8,14,15,-9,19,2,16,1,9,1,16,1,16,-9,-7,0,12,13,-3,-1,13,7,14,-6,12,-5,5,5,6,7,-2,7,2,19,1,4,18,18,5,15,10,-1,-9,18,12,9,10,-3,4,-5,3,14,1,6,-6,2,-2,2,12,6,19,13,5,3,18,-6,-5,1,19,4,4,0,18,-9,11,0,11,4,10,4,15,18,-2,9,-8,-5,-1,16,15,5,-8,-1,9,-6,13,-7,-8,19,-5,-6,-7,16,1,-5,-6,7,9,12,7,1,16,15,-9,-8,14,4,-9,13,-7,-1,0,-6,8,2,-5,1,-5,-6,6,5,-2,-3,-5,0,-8,2,-2,-2,7,13,2,19,-9,17,-10,6,-10,1,-1,5,9,10,18,-7,-7,3,1,-9,-1,-4,3,-10,-6,-2,17,7,19,-10,16,-8,9,-9,1,-6,17,4,2,4,14,18,15,9,14,7,4,-6,4,0,0,11,-4,-4,-7,-8,-7,5,6,-1,-7,-10,17,13,-2,5,-5,-7,10,0,-10,-9,3,5,6,-10,-8,1,-6,3,17,-1,-10,6,-9,18,13,18,12,6,15,1,15,19,8,8,18,-4,4,3,-6,8,18,-10,17,8,-7,8,9,18,11,18,-10,16,15,10,-6,-9,6,-5,11,1,9,-2,-9,0,7,-5,-3,-4,17,14,19,9,10,-9,6,5,-2,-4,10,-3,19,16,7,7,-7,-1,-2,19,8,-5,10,-7,5,-8,4,-10,19,0,11,1,11,2,14,-2,6,-10,17,5,18,-1,-7,16,-4,-5,-9,-4,13,-1,-7,-9,9,10,-4,17,1,6,18,14,6,-2,17,3,11,-8,0,4,17,13,4,17,0,11,-10,6,10,7,-7,19,-1,17,8,-3,12,5,1,13,10,0,2,-7,11,16,-2,-4,-4,-9,4,-9,19,-9,1,-3,4,-6,15,-1,19,-9,14,18,6,-6,13,-4,5,-4,9,6,9,15,11,-10,16,-6,6,15,-6,9,6,8,-7,19,-2,10,-1,3,2,9,8,19,-10,11,19,-5,10,-10,2,-10,9,18,11,9,18,19,-2,10,9,7,2,3,15,19,10,15,7,10,7,9,-7,9,-7,17,-9,0,19,4,9,0,-9,9,11,-2,3,-10,14,7,16,-5,7,6,-7,8,10,13,-9,3,-1,2,4,8,-6,16,18,-8,13,11,16,-5,-5,3,16,5,17,-10,3,0,13,16,-4,6,-2,15,2,8,6,17,5,9,5,8,19,1,1,19,-3,-9,12,1,9,6,17,-4,-5,1,11,-1,6,2,-3,7,12,15,7,-3,18,11,7,14,12,0,15,19,1,8,0,-5,16,0,-5,2,5,7,9,16,-9,-1,-2,5,12,8,3,2,3,6,10,-8,-2,-4,5,-4,-7,17,7,3,-6,-8,-5,11,-6,9,7,1,1,-8,16,0,16,6,-6,-10,-5,14,14,-10,1,8,-3,-9,-7,2,16,2,16,10,5,4,9,-2,8,-10,13,17,2,12,-4,2,5,-5,16,11,9,16,17,12,-9,19,-10,15,-7,12,1,17,-7,17,3,9,-9,4,-7,16,19,18,-7,13,-10,8,19,-5,-4,19,-6,4,12,19,10,13,1,-3,-8,7,14,3,-7,11,2,8,0,-7,-6,17,5,2,0,17,16,11,3,13,9,16,-4,9,5,-5,-3,17,15,0,14,13,11,-7,6,8,4,-9,15,16,-6,13,0,-9,-6,9,-5,18,-10,-1,-9,15,16,-8,-8,19,11,-2,12,-4,-2,8,14,19,-7,10,-2,-9,-8,10,-1,2,5,17,-9,12,17,6,-9,10,-2,0,5,2,-5,5,9,6,7,-6,4,4,-6,5,-4,19,5,18,16,17,4,15,3,-8,3,17,0,-6,18,11,14,2,16,0,17,-1,5,-8,9,4,15,14,15,17,-10,5,0,0,-5,1,-4,12,13,-8,3,8,-8,3,3,-9,-8,-5,16,2,-9,-9,-1,15,6,17,-1,16,-7,8,-1,-1,-8,-5,8,17,-5,6,9,15,12,7,16,14,4,14,13,7,8,5,14,5,14,-2,2,-9,11,18,2,16,19,0,-5,10,5,4,-2,-2,17,9,13,-9,-10,19,-1,12];
console.log(maxRotateFunction(D));