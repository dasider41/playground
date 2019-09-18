<?php
$dates = ["2010/03/30", "15/12/2016", "11-15-2012", "20130720"];

function makeDate(string $date): string
{
    $formats = [
        "Y/m/d",
        "d/m/Y",
        "m-d-Y",
        "Ymd",
    ];

    $dateFromat = function ($date, $df) {
        return  DateTime::createFromFormat($df, $date);
    };

    foreach ($formats as $df) {
        if ($dateFromat($date, $df)) {
            return $dateFromat($date, $df)->format('Ymd');
        }
    }
}

foreach ($dates as $date) {
    echo makeDate($date) . "\n";
}
