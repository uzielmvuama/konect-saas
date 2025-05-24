<?php

namespace App\Helpers\Services;

use App\Events\CompanyMemberInvitationEvent;
use App\Helpers\Core\MemberRequestStatus;
use App\Helpers\Core\Utils;
use App\Models\Company;
use App\Models\CompanyMember;
use App\Models\User;
use Illuminate\Http\Response;
use Illuminate\Support\Str;


class CompanyMemberService
{

    public function addUsersToCompany(array $userUids, string $companyUid)
    {
        $company = Company::where('uuid', $companyUid)->first();
        if ($company) {

            foreach ($userUids as $userUid) {
                $user = User::where('uuid', $userUid)->first();
                if ($user) {
                    $org = CompanyMember::where('user_id', $user->id)->where('company_id', $company->id)->first();
                    if (!$org) {
                        $member = new CompanyMember();
                        $member->user_id = $user->id;
                        $member->company_id = $company->id;
                        $member->uuid = Str::uuid()->toString();
                        $member->save();
                        event(new CompanyMemberInvitationEvent($member));
                    } else {
                        $hasExpired = Utils::actionValidityHasExpired(dateFrom: $org->updated_at);
                        if ($hasExpired) {
                            $org->touch();
                        }
                        event(new CompanyMemberInvitationEvent($org));
                    }
                }
            }

            return Utils::json_res(true, "Invitation successfully sent", $member, Response::HTTP_CREATED);
        }
    }

    public function acceptInvitation(CompanyMember $member)
    {
        $hasExpired = Utils::actionValidityHasExpired(dateFrom: $member->updated_at);


        if (!$hasExpired) {
            $member->request_status = MemberRequestStatus::ACCEPTED;
            if (!$member->joined_at) {
                $member->joined_at = now();
            }
            $member->save();
            return Utils::json_res(true, "Invitation accepted successfully", $member->load(['user', 'company'])->first(), Response::HTTP_ACCEPTED);
        } else {
            return Utils::json_res(false, "The link has expired", null, Response::HTTP_OK);
        }
    }

    public function declineInvitation(CompanyMember $member)
    {
        $hasExpired = Utils::actionValidityHasExpired(dateFrom: $member->updated_at);
        if (!$hasExpired) {
            $member->request_status = MemberRequestStatus::DECLINED;
            $member->save();
            return Utils::json_res(true, "Invitation decliened", null, Response::HTTP_ACCEPTED);
        } else {
            return Utils::json_res(false, "The link has expired", null, Response::HTTP_OK);
        }
    }

    public function updateUserInfo(?string $company_email, ?string $role, ?string $phone_ext, CompanyMember $member)
    {
        $member->company_email = $company_email;
        $member->phone_ext = $phone_ext;
        $member->role = $role;
        $member->save();
        return Utils::json_res(true, "Successfuly updated", null, Response::HTTP_OK);
    }
}
