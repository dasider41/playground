<?php
/*
https://leetcode.com/problems/jewels-and-stones/

771. Jewels and Stones
Easy

1608

301

Favorite

Share
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
Accepted

/**
 * @param String $J
 * @param String $S
 * @return Integer
 */
function numJewelsInStones($J, $S)
{
    $arrJewels = str_split($J);
    $arrStones = str_split($S);
    $output = 0;
    foreach ($arrJewels as $jewel) {
        $result = array_keys($arrStones, $jewel);
        $output += count($result);
    }
    return $output;
}

$J = "aA";
$S = "aAAbbbb";
var_dump(numJewelsInStones($J, $S) === 3);

$J = "z";
$S = "ZZ";
var_dump(numJewelsInStones($J, $S) === 0);
