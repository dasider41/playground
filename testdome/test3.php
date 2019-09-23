<?php

function isPalindrome(string $word): bool
{
    $newWord = strrev($word);
    return strtolower($newWord) === strtolower($word);
}

var_dump(isPalindrome('Deleveled'));
