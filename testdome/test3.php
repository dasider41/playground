<?php
// A palindrome is a word that reads the same backward or forward.

// Write a function that checks if a given word is a palindrome. Character case should be ignored.

// For example, isPalindrome("Deleveled") should return true as character case should be ignored, resulting in "deleveled", which is a palindrome since it reads the same backward and forward.

function isPalindrome(string $word): bool
{
    $newWord = strrev($word);
    return strtolower($newWord) === strtolower($word);
}

var_dump(isPalindrome('Deleveled'));
