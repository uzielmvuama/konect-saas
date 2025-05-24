<?php
namespace App\Helpers\Classes\Plan;

class Plan{
    public string $name;
    public string $description;
    public float $price;
    public array $includedGadgets= [];
    public bool $freeRemplacement;
    public int $maxConnection;

     function __construct($name, $description, $price, $includedGadgets, $freeRemplacement, $maxConnection) {
        $this->name = $name;
        $this->description = $description;
        $this->price = $price;
        $this->includedGadgets = $includedGadgets;
        $this->freeRemplacement = $freeRemplacement;
        $this->maxConnection = $maxConnection;
    }

    public function json_gen(): string | false
    {
        return json_encode($this);
    }
}

