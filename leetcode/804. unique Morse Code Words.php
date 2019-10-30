<?php

// https://leetcode.com/problems/unique-morse-code-words/

// 804. Unique Morse Code Words

// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".
// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

/**
 * @param String[] $words
 * @return Integer
 */
function uniqueMorseRepresentations($words)
{
    $result = [];
    foreach ($words as $word) {
        $morse = convertWordToMorse($word);
        if (!in_array($morse, $result)) {
            $result[] = $morse;
        }
    }
    return count($result);
}

function convertWordToMorse($word)
{
    $dic = generateDictionary();
    $morse = "";
    for ($i = 0; $i < strlen($word); $i++) {
        $morse .= $dic[$word[$i]];
    }
    return $morse;
}

function generateDictionary()
{
    $dicionary = [];
    $ascii = 97;
    $mores = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    for ($i = 0; $i < count($mores); $i++) {
        $dicionary[chr($ascii + $i)] = $mores[$i];
    }
    return $dicionary;
}

$words = ["gin", "zen", "gig", "msg"];
var_dump(uniqueMorseRepresentations($words) === 2);
