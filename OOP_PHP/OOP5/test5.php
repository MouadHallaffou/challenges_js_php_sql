<?php
interface EmployeInterface {
    public static function travailler();
}

abstract class Employe implements EmployeInterface {

    
}

class Developpeur extends Employe {
    public static function travailler() {
        return "hello";
    }
}

Developpeur::travailler();
