<?php

abstract class Sheep {
    protected float $height;
    private float $width;
    public function __construct($height, $width)
    {
        $this->height = $height;
        $this->width = $width;
    }
    abstract public function calcule();
    public function getWith(){
        return $this->width;
    }
}

class Cercle extends Sheep {
    public function __construct($height, $width)
    {
        parent::__construct($height, $width);
    }
    public function calcule()
    {
        echo $this->height*$this->getWith();
    }
}
// $cercle = new Cercle(2,3);
// $cercle->calcule();

interface Drawable  {
    public function draw();
}
class Circle implements Drawable {
    private string $color;
    private string $type;

    public function __construct($color, $type){
        $this->color = $color;
        $this->type = $type;
    }
    public function draw()
    {
        echo"colour: $this->color || type: $this->type";
    }
}
class Rectangle implements Drawable {
    private string $color;
    private string $type;

    public function __construct($color, $type){
        $this->color = $color;
        $this->type = $type;
    }
    public function draw()
    {
        echo"colour: $this->color || type: $this->type";
    }
}
class Square implements Drawable {
    private string $color;
    private string $type;

    public function __construct($color, $type){
        $this->color = $color;
        $this->type = $type;
    }
    public function draw()
    {
        echo"colour: $this->color || type: $this->type";
    }
}

$sqr = new Square("red", "square");
$sqr->draw();