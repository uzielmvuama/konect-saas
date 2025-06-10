<?php

namespace App\Http\Controllers;


/**
 * @template TService
 */
abstract class Controller
{

    /**
     * @param TService $service
     */
    public function __construct(protected ?object $service = null) {}
}
