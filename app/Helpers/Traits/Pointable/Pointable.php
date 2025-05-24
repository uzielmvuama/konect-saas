<?php

namespace App\Helpers\Traits\Pointable;

use App\Helpers\Enums\PointActions;

trait Pointable
{
    public function update_kpoints(PointActions $actionType)
    {
        $this->kpoint= $this->kpoint + $actionType->score();
        $this->save();
        return true;
    }
}
