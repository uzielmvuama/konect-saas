<?php

namespace App\Http\Controllers;

use App\Helpers\Core\Utils;
use App\Helpers\Services\KonectService;
use App\Http\Resources\KoGadgetResource;
use App\Models\CompanyMember;
use App\Models\Konect;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use phpDocumentor\Reflection\Types\True_;
use Symfony\Component\HttpFoundation\Response;

class KonectController extends Controller
{
    public function __construct(KonectService $konectService)
    {
        parent::__construct($konectService);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->only([
                'uuid',
                'way',
            ]),
            [
                'uuid' => ['required', 'uuid'],
                'way' => ['required', 'integer'],
            ]
        );

        if (!$validator->fails()) {
            $validsData = $validator->validated();

            $validsData["ip"] = $request->header('X-Forwarded-For') ?? $request->ip();

            $rs = (new KonectService)->makeConnection($validsData);

            return true;
            // return response()->json($rs, status: $rs["status"]);
        } else {
            return back()->withErrors($validator)
                ->withInput();
        }
    }

    public function feed(User $user)
    {
        $validator = Validator::make(
            request()->only([
                'name',
                'firstname',
                'phone',
                'email',
            ]),
            [
                'name' => ['required', 'string'],
                'firstname' => ['required', 'string'],
                'phone' => ['required', 'string',],
                'email' => ['required', 'email'],
            ]
        );

        if (!$validator->fails()) {
            $validsData = $validator->validated();
            $rs = $this->service->feedbackResponse($validsData["name"], $validsData["firstname"], $validsData["email"], $validsData["phone"], $user);
            // return response()->json($rs, status: $rs["status"]);
        } else {
            return back()->withErrors($validator)
                ->withInput();
        }
    }
    /**
     * Display the specified resource.
     */
    public function show(Konect $konect)
    {
        return Utils::json_res(true, "Konect successfully fetched", $konect, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Konect $konect)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Konect $konect)
    {
        //
    }
}
