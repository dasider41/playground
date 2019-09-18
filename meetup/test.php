<?php

function getExtension(string $filepath): string
{
    $arrFile = explode(".", $filepath);
    if (count($arrFile) > 1) {
        return end($arrFile);
    }
    return "";
}

print "blah.gif:      " . getExtension("blah.gif") . "<br />\n";
print "my.file.gif:   " . getExtension("my.file.gif") . "<br />\n";
print "this/is/afile: " . getExtension("this/is/afile") . "<br />\n";
