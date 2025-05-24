<?php

namespace App\Helpers\Traits;

use App\Helpers\Core\Utils;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

trait ApiFailedable
{
    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json(
            Utils::json_res(false, "Validator Inputs Error",   $validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY)
        ));
    }
}
