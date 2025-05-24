<?php
namespace App\Helpers\Core;

enum MemberRequestStatus: string {
    case PENDING = 'PENDING';
    case COMPLETED = 'COMPLETED';
    case DECLINED = 'DECLINED';
    case ACCEPTED = 'ACCEPTED';
}
