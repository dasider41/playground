<?php
/*
https://leetcode.com/problems/range-sum-query-2d-immutable/

304. Range Sum Query 2D - Immutable

Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
Note:
You may assume that the matrix does not change.
There are many calls to sumRegion function.
You may assume that row1 ≤ row2 and col1 ≤ col2.

*/
class NumMatrix
{
    /**
     * @param Integer[][] $matrix
     */

    private $matrix = [];
    function __construct($matrix)
    {
        $this->matrix = $matrix;
    }

    /**
     * @param Integer $row1
     * @param Integer $col1
     * @param Integer $row2
     * @param Integer $col2
     * @return Integer
     */
    function sumRegion($row1, $col1, $row2, $col2): int
    {
        $sum = 0;
        for ($i = $row1; $i <= $row2; $i++) {
            for ($j = $col1; $j <= $col2; $j++) {
                $sum += $this->matrix[$i][$j];
            }
        }
        return $sum;
    }
}

$matrix =  [
    [3, 0, 1, 4, 2],
    [5, 6, 3, 2, 1],
    [1, 2, 0, 1, 5],
    [4, 1, 0, 1, 7],
    [1, 0, 3, 0, 5]
];

$obj = new NumMatrix($matrix);
$ret_1 = $obj->sumRegion(2, 1, 4, 3);
var_dump($ret_1 === 8);

$ret_2 = $obj->sumRegion(1, 1, 2, 2);
var_dump($ret_2 === 11);

$ret_3 = $obj->sumRegion(1, 2, 2, 4);
var_dump($ret_3 === 12);
