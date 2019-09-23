<?php
interface iInput
{
    public function add($text);
    public function getValue();
}

class TextInput implements iInput
{
    public $result = "";

    public function add($text)
    {
        $this->result .= $text;
    }

    public function getValue()
    {
        return $this->result;
    }
}

class NumericInput extends TextInput
{
    final public function add($text)
    {
        if (is_numeric($text)) {
            $this->result .= $text;
        }
    }
}

$input = new NumericInput();
$input->add('1');
$input->add('a');
$input->add('0');
echo $input->getValue();
