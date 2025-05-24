<?php

namespace App\Helpers\Enums;

enum ActionStatus: string
{
    case SUCCESS = 'success';
    case FAILED = 'failed';
    case PENDING = 'pending';
    case REFUNDED = 'refunded';
    case CANCELLED = 'cancelled';
    case EXPIRED = 'expired';
    case COMPLETED = 'completed';
    case UNCOMPLETED = 'uncompleted';

    case PROGRESS = 'progress';
    case INITIALIZED = 'initialized';

}
