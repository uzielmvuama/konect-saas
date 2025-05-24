<?php

use Carbon\Carbon;
use Carbon\CarbonInterface;
use Illuminate\Validation\Validator;

function esser(string $text, int $length): string
{
    return $length > 1 ? $text . 's' : $text;
}

function json_res(bool $state, string $msg = "",  $data = [], int $status = null): array

{
    return ["state" => $state, "msg" => $msg, "data" => $data, "status" => $status];
}

function json_res_error(Validator $validator)
{
    return json_res(state: false, status: 422, msg: "Validator Inputs Error", data: $validator->errors());
}

function timeSinceNow(Carbon $targetDate)
{
    $now = Carbon::now();
    return $targetDate->diffForHumans($now, CarbonInterface::DIFF_RELATIVE_TO_NOW, false, 1, 0 | Carbon::NO_ZERO_DIFF | Carbon::JUST_NOW | Carbon::ONE_DAY_WORDS);
}

function growthPercentageFromDataCount(int $beforeValue, int $afterValue)
{
    $diff = $afterValue - $beforeValue;
    $percentage = $beforeValue != 0 ? ($diff / $beforeValue) * 100 : 0;
    return $percentage;
}
