<?php

namespace App\Http\Controllers;

use App\Data\UserDoKonectData;
use App\Data\UserFeedData;
use App\Helpers\Core\Utils;
use App\Helpers\Services\KonectService;
use App\Models\CompanyMember;
use App\Models\Konect;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class KonectController extends Controller
{
    /**
     * @param KonectService $konectService
     */
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
    public function store(UserDoKonectData $data)
    {
        $data->setIp(request()->header('X-Forwarded-For') ?? request()->ip());
        $rs = (new KonectService)->makeConnection($data->toArray());
        return true;
    }

    public function feed(User $user, UserFeedData $data)
    {
        $rs = $this->service->feedbackResponse($data->name, $data->firstname, $data->email, $data->phone,
            $data->comment,
        $user);
        return Utils::json_res(true, "Feedback successfully sent", $rs, Response::HTTP_OK);
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
