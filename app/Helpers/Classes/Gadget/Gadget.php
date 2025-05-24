<?php

namespace App\Helpers\Classes\Gadget;

use App\Helpers\Classes\Gadget\Gcolor;

class Gadget
{
    public string $name;
    public string $description;
    public float $price;
    public ?float $oldPrice;
    public float $weightDimensions;
    public Gcolor $color;
    public string $material;
    public string $type;
    public array $imageURL = [];

    // Gadgets types
    public const CARD_TYPE = "card";
    public const WATCH_TYPE = "watch";
    public const STICKER_TYPE = "sticker";
    public const RING_TYPE = "ringtype";

    // Gadgets Prefix
    public static function cardCodePrefix(int $id): string
    {
        return "CRD-" . str_pad($id, 4, '0', STR_PAD_LEFT);
    }

    // Constructeur
    public function __construct(
        string $name,
        string $description,
        float $price,
        ?float $oldPrice,
        float $weightDimensions,
        Gcolor $color,
        string $material,
        array $imageURL,
        string $type
    ) {
        $this->name = $name;
        $this->description = $description;
        $this->price = $price;
        $this->oldPrice = $oldPrice;
        $this->weightDimensions = $weightDimensions;
        $this->color = $color;
        $this->material = $material;
        $this->imageURL = $imageURL;
        $this->type = $type;
    }

    // Méthode pour afficher les détails de l'article
    public function afficherDetails(): void
    {
        echo "Name: " . $this->name . "<br>";
        echo "Description: " . $this->description . "<br>";
        echo "Price: " . $this->price . "<br>";
        echo "OldPrice: " . $this->oldPrice . "<br>";
        echo "Poids/Dimensions: " . $this->weightDimensions . "<br>";
        echo "Couleur: " . $this->color . "<br>";
        echo "Matériau: " . $this->material . "<br>";
        echo "Image URL: " . implode(", ", $this->imageURL) . "<br>";
        echo "Type: " . $this->type . "<br>";
    }

    public function json_gen(): string|false
    {
        return json_encode($this);
    }
}
