<?php
namespace App\Helpers\Enums;

enum PointActions
{
    case CONNECTING;
    case REGISTRATION;
    case SELLING;

    public function score():float {
        return match ($this) {
            self::CONNECTING => 1.0,
            self::REGISTRATION => 5.0,
            self::SELLING => 25.0,
        };
    }
}
