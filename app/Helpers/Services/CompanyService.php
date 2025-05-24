<?php

namespace App\Helpers\Services;

use Illuminate\Support\Str;
use App\Helpers\Core\Utils;
use App\Http\Resources\CompanyResource;
use App\Models\Company;
use Illuminate\Http\UploadedFile;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;


class CompanyService
{
    public function getAllUserCompany()
    {
        $companies = Company::where("user_id", Auth::user()->id)->with(['members'])->get();
        return Utils::json_res(true, "User company list", CompanyResource::collection($companies), Response::HTTP_OK);
    }
    public function getSpecificCompany()
    {
        $companies = Company::with(['members'])->get();
        return Utils::json_res(true, "User company list", CompanyResource::collection($companies), Response::HTTP_OK);
    }
    public function createCompany(array $payload)
    {
        $payload["user_id"] = Auth::user()->id;
        $payload["uuid"] = Str::uuid()->toString();


        $company = Company::create($payload);
        return Utils::json_res(true, "Company created successfully", $company, Response::HTTP_CREATED);
    }

    public function updateCompanyImage(Company $company, UploadedFile $img, string $rootPath = "companies-photos")
    {

        $image = Image::make($img->path());
        $image->fit(1000);

        $rs = false;
        $imgFilename =  $company->uuid . ".png";

        if (Storage::disk(FILE_DRIVER)->exists($rootPath) === false) {
            Storage::disk(FILE_DRIVER)->makeDirectory($rootPath);
        }


        if (Storage::disk(FILE_DRIVER)->put($rootPath . DIRECTORY_SEPARATOR . $imgFilename, (string)$image->encode('jpg', 100))) {

            // $img->storeAs($rootPath, $imgFilename, FILE_DRIVER)
            $company->brand_logo_img = $rootPath . DIRECTORY_SEPARATOR . $imgFilename;
            $company->save();


            $this->compressImage($company);
            // $this->vcardGenerate($user);

            $rs =  Utils::json_res(true, "Profile image successfully updated", $company, Response::HTTP_CREATED);
        } else {
            $rs =  Utils::json_res(false, "Problem during upload proccess", [], Response::HTTP_BAD_REQUEST);
        }

        return $rs;
    }

    function compressImage(Company $company, string $rootPath = "compressed-companies-photo")
    {
        if ($company->exists()) {

            // $this->vcardGenerate($company);
            $imgPath = Storage::disk(FILE_DRIVER)->get($company->brand_logo_img);
            $basename = pathinfo($company->brand_logo_img, PATHINFO_BASENAME);
            $destPath = DIRECTORY_SEPARATOR . $rootPath . DIRECTORY_SEPARATOR . $basename;
            # Compress Dir Start
            $compress_dir = $rootPath;

            if (Storage::disk(FILE_DRIVER)->exists($compress_dir) === false) {
                Storage::disk(FILE_DRIVER)->makeDirectory($compress_dir);
            }
            # Compress Dir End
            # Compress Dir End
            $image = Image::make($imgPath);
            $image->fit(250, 250);
            // $image->save($destPath);
            Storage::disk(FILE_DRIVER)->put($destPath, (string) $image->encode());

            return response()->json(Utils::json_res(state: true, status: 201, msg: "compressed image created", data: []));
        } else {
            return response()->json(Utils::json_res(state: false, status: 201, msg: "company not found", data: []), status: 400);
        }

        // Image::make($image->getRealPath())->resize(150, 150)->save($path);
        // return response()->json(json_res(state: true, status: 201, msg: "konect successfully created", data: []));
    }
}
