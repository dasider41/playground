<?php


function numbersToLetters(string $string): string
{
    define(FIRST_ASCII, 64);

    $newScentence = "";
    $words = explode('+', $string);
    foreach ($words as $word) {
        $chars = explode(' ', $word);
        foreach ($chars as $char) {
            $newScentence .= chr($char + FIRST_ASCII);
        }
        $newScentence .= " ";
    }
    return trim($newScentence);
}

echo numbersToLetters('20 5 19 20+4 15 13 5');
