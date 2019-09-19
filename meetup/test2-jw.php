<?php
function arrayFlat(array $array): array
{
    return array_reduce($array, function ($acc, $item) {
        return array_merge($acc, is_array($item) ? arrayFlat($item) : [$item]);
    }, []);
}

function countItems(array $arr, string $item): int
{
    return array_count_values(arrayFlat($arr))[$item];
}

$arr = [
    "apple",
    [
        "banana", "strawberry", "apple",
        [
            "banana", "strawberry", "apple",
            [
                "banana", "strawberry", "apple"
            ]
        ]
    ]
];

var_dump(countItems($arr, "apple") === 4);
