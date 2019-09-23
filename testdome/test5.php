<?php
// Implement the function findRoots to find the roots of the quadratic equation: ax2 + bx + c = 0. The function should return an array containing both roots in any order.

// The roots of the quadratic equation can be found with the following formula: A quadratic equation.

// For example, findRoots(2, 10, 8) should return [-1, -4] or [-4, -1] as the roots of the equation 2x2 + 10x + 8 = 0 are -1 and -4.

/**
 * @return array An array of two elements containing roots in any order
 */
function findRoots($a, $b, $c)
{
    $minusB = -1 * $b;
    $sqrtValue = sqrt(abs(($b * $b) - (4 * $a * $c)));
    $doubleA = $a * 2;
    return [
        ($minusB + $sqrtValue) / $doubleA,
        ($minusB - $sqrtValue) / $doubleA
    ];
}

print_r(findRoots(2, 10, 8));
