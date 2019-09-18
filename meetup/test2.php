<?php

function array_values_recursive(array $array): array
{
    $flat = [];

    foreach ($array as $value) {
        if (is_array($value)) {
            $flat = array_merge($flat, array_values_recursive($value));
        } else {
            $flat[] = $value;
        }
    }
    return $flat;
}

function countItems(array $arr, string $item): int
{
    return count(array_keys(array_values_recursive($arr), $item));
}

$arr = [
    "apple",
    ["banana", "strawberry", "apple"]
];

echo countItems($arr, "apple");
