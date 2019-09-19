/*
https://leetcode.com/problems/count-primes/

204. Count Primes

Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const isPrime = n => {
    for (j = 2; j <= Math.sqrt(n); j++) {
      if (n % j === 0) {
        return false;
      }
    }
    return n > 1;
  };

  let primesCount = 0;
  for (i = 2; i < n; i++) {
    if (isPrime(i)) {
      primesCount++;
    }
  }

  return primesCount;
};

console.log(countPrimes(499979));
