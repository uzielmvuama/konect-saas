<?php

namespace App\Http\Controllers;

use App\Actions\Jetstream\CreateTeam;
use App\Models\Industry;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamsController extends Controller
{
    public function create()
    {
        return Inertia::render('Profile/Teams/CreateTeam', [
            'industries' => Industry::all()
        ]);
    }

    public function doCreate(Request $request)
    {
        $team= (new CreateTeam())->create($request->user(), $request->only(['name','industry','description']));
        return to_route('dashboard');
    }
}
