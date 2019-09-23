<?php
// Write a function that provides change directory (cd) function for an abstract file system.

// Notes:

// Root path is '/'.
// Path separator is '/'.
// Parent directory is addressable as '..'.
// Directory names consist only of English alphabet letters (A-Z and a-z).
// The function should support both relative and absolute paths.
// The function will not be passed any invalid paths.
// Do not use built-in path-related functions.
// For example:

// $path = new Path('/a/b/c/d');
// $path->cd('../x')
// echo $path->currentPath;
// should display '/a/b/c/x'.

class Path
{
    public $currentPath;

    function __construct(string $path)
    {
        $this->currentPath = $path;
    }

    public function cd(string $newPath): void
    {
        $arrPath = explode("/", $newPath);
        foreach ($arrPath as $p) {
            if ($p === "..") {
                $newArrayPath = explode("/", $this->currentPath);
                unset($newArrayPath[count($newArrayPath) - 1]);
                $this->currentPath = implode("/", $newArrayPath);
            } else {
                $this->currentPath .= "/" . $p;
            }
        }
    }
}

$path = new Path('/a/b/c/d');
$path->cd('../x');
echo $path->currentPath;
