<?php

function groupByOwners(array $files): array
{
    $newArray = [];
    foreach ($files as $key => $val) {
        $newArray[$val][] = $key;
    }
    return $newArray;
}

$files = array(
    "Input.txt" => "Randy",
    "Code.py" => "Stan",
    "Output.txt" => "Randy"
);
var_dump(groupByOwners($files));
