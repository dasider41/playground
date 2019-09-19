<?php
/*
https://leetcode.com/problems/pascals-triangle/

118. Pascal's Triangle

In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

/**
 * @param Integer $numRows
 * @return Integer[][]
 */
function generate(int $numRows): array
{
    $result = [];
    for ($i = 0; $i < $numRows; $i++) {
        $temp[0] = 1;
        for ($j = 1; $j < $i; $j++) {
            $temp[$j] = $result[$i - 1][$j - 1] + $result[$i - 1][$j];
        }
        $temp[$i] = 1;
        $result[$i] = $temp;
    }

    return $result;
}

var_dump(generate(5));
