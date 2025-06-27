<?php

namespace App\Http\Controllers;

use App\Helpers\Classes\Vcard\UserVcard;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\EmailVcard;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\LocationVcard;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\NameVcard;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\NoteVcard;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\PhoneVcard;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\SocialVcardItem\SocialVcardItem;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\SocialVcardItemAll;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\UrlVcard;
use App\Helpers\Classes\Vcard\VcardProperty\Properties\VideoLinkVcard;
use App\Helpers\Services\KonectService;
use App\Helpers\Services\UserService;
use App\Http\Requests\Profile\UpdateProfileGeneralInfoRequest;
use App\Http\Resources\KoGadgetResource;
use App\Models\CompanyMember;
use App\Models\KoGadget;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

/**
 * @extends Controller<UserService>
 */
class UserController extends Controller
{
    public function __construct(UserService $userService)
    {
        parent::__construct($userService);
    }

    public function contactSheet(KoGadget $koGadget)
    {
        if ($koGadget->company_id) {
            $koGadget->append("company_member");
            $cm = CompanyMember::where("user_id", $koGadget->user_id)->where("company_id", $koGadget->company_id)->first();
            $koGadget->company_member = $cm;
        }
        return Inertia::render('ContactSheet', [
            'gadget' => new KoGadgetResource($koGadget)
        ]);
    }

    public function contactSheetDoKonect($request)
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
            return to_route('contactSheet')->withErrors($validator)->with($rs)
                ->withInput();
            // return response()->json($rs, status: $rs["status"]);
        } else {
            return to_route('contactSheet')->withErrors($validator)->withErrors($validator)
                ->withInput();
        }
    }

    public function contactSheetDoFeedback(KoGadget $koGadget)
    {
        if ($koGadget->company_id) {
            $koGadget->append("company_member");
            $cm = CompanyMember::where("user_id", $koGadget->user_id)->where("company_id", $koGadget->company_id)->first();
            $koGadget->company_member = $cm;
        }
        return Inertia::render('ContactSheet', [
            'gadget' => new KoGadgetResource($koGadget)
        ]);
    }


    public function updateVcard(Request $request)
    {
        $user = $request->user();

        $data = is_array($request->input('data')) ? json_decode(json_encode($request->input("data"))) : json_decode($request->input('data'));


        //dd(json_decode($request->input('data')));
        $vinfo = new UserVcard($user->vinfo);

        $vinfo->addName(new NameVcard(
            givenName: $data->names->givenName ?? "",
            familyName: $data->names->familyName ?? "",
            middleName: $data->names->middleName ?? "",
            prefix: $data->names->prefix ?? "",
        ));


        $vinfo->addAdress(new LocationVcard(
            state: ucfirst($data->location->state ?? ""),
            iso_code: strtoupper($data->location->country ?? "")
        ));

        $vinfo->addSocialProfil(new SocialVcardItemAll(
            facebook: new SocialVcardItem(uri: $data->socialProfils->facebook ?? "", type: "facebook"),
            instagram: new SocialVcardItem(uri: $data->socialProfils->instagram ?? "", type: "instagram"),
            twitter: new SocialVcardItem(uri: $data->socialProfils->twitter ?? "", type: "twitter"),
            youtube: new SocialVcardItem(uri: $data->socialProfils->youtube ?? "", type: "youtube"),
            linkedin: new SocialVcardItem(uri: $data->socialProfils->linkedin ?? "", type: "linkedin"),
            tiktok: new SocialVcardItem(uri: $data->socialProfils->tiktok ?? "", type: "tiktok"),
            pinterest: new SocialVcardItem(uri: $data->socialProfils->pinterest ?? "", type: "pinterest"),
        ));

        $vinfo->addNote(new NoteVcard(text: $data->note->text ?? ""));

        $vinfo->email = array_filter(array_map(function ($email) {
            return !empty($email->text) ? new EmailVcard(text: $email->text, type: $email->type) : null;
        }, $data->emails));

        $vinfo->phone = array_filter(array_map(function ($phone) {
            return !empty($phone->text) ? new PhoneVcard(text: $phone->text, type: $phone->type) : null;
        }, $data->phones));

        $vinfo->urls = array_filter(array_map(function ($link) {
            return !empty($link->uri) ? new UrlVcard(type: $link->type, uri: $link->uri) : null;
        }, $data->urls));

        $vinfo->videoLinks = array_filter(array_map(function ($videoLink) {
            return !empty($videoLink->uri) ? new VideoLinkVcard(type: $videoLink->type, uri: $videoLink->uri) : null;
        }, $data->videoLinks));

        $user->vinfo = $vinfo->json_gen();
        $user->vconfig = json_encode($data->config);

        if ($request->hasFile('img')) {
            ### Update the image
            // UpdateImageJob::dispatch($user, $request->file('img'));
            $rs = $this->service->updateProfilImage($user, $request->file('img'));
        }
        $this->service->vcardGenerate($user);

        $user->save();

        return Redirect::route('profile.edit')
            ->with('success', "Profile successfully updated");
    }

    final public function updateVcardGeneralInfo(UpdateProfileGeneralInfoRequest $request) : RedirectResponse
    {
        $user = $request->user();
        // Retrieve the validated input data...

        $validated = $request->validated();

        //dd(json_decode($request->input('data')));
        $vinfo = new UserVcard($user->vinfo);

        $vinfo->addName(new NameVcard(
            givenName: $validated["first_name"] ?? "",
            familyName: $validated["name"] ?? "",
            middleName: $validated["middle_name"] ?? "",
            prefix: $validated["prefix"] ?? "",
        ));


        $vinfo->addAdress(new LocationVcard(
            state: ucfirst(json_decode($validated["location"])->NAME ?? ""),
            iso_code: strtoupper(json_decode($validated["location"])->ISOCODE ?? "")
        ));


        $vinfo->addNote(new NoteVcard(text: $validated["bio"] ?? ""));


        $user->vinfo = $vinfo->json_gen();

        $this->service->vcardGenerate($user);

        $user->save();

        return Redirect::route('settings')
            ->with('success', "Profile successfully updated");
    }
}
