import React, { useEffect } from "react";
import SettingsLayout from "@/Layouts/SetttingsLayout";
import PrelineTiptapEditor from "@/Components/Form/PrelineTiptapEditor";
import {useForm, usePage} from "@inertiajs/react";
import SelectCountryField from "@/Components/Form/Select/SelectCountryField";
import {Country, ICountry} from "country-state-city";
import FormError from "@/Components/Errors/FormError";

interface GeneralSettingsProps {
  // Props ici
}


const GeneralSettings: React.FC<GeneralSettingsProps> = (props) => {
    const { user } = usePage().props as any;
    const userLocation= user.vinfo.location
    const allCountries = Country.getAllCountries();

  const { data, setData, patch, processing, errors } = useForm({
    prefix: user.vinfo.names.prefix,
    first_name: user.vinfo.names.givenName,
    name: user.vinfo.names.familyName,
    middle_name: user.vinfo.names.middleName,
    bio: user.vinfo.note.text,
    location: JSON.stringify(Country.getCountryByCode(userLocation.iso_code != null? userLocation.iso_code : "AF")),
  });

    const update = () => {
    patch("/settings/vcard/general-info");
  };
  return (
    <SettingsLayout>
      {/* Account Card */}
      {/* Title */}
      <div className="mb-4 xl:mb-8">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">Profile</h1>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Manage your name, password and account settings.
        </p>
      </div>
      {/* End Title */}
      {/* Form */}
      <form>
        {/* Personal Info */}
        <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
          <h2 className="font-semibold text-gray-800 dark:text-neutral-200">Personal info</h2>

          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label
                htmlFor="hs-pro-dappinm"
                className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
              >
                Prefix
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              <input
                id="hs-pro-dappinm"
                type="text"
                className="py-1.5 sm:py-2 px-3 block w-20 border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Mr/Ms"
                onChange={(e) => setData("prefix", e.target.value)}
                defaultValue={data.prefix}
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Enter your full name, or a display name you are comfortable with.
              </p>
              {errors.prefix && (
                <div>
                  {" "}
                  <FormError message={errors.prefix} />
                </div>
              )}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label
                htmlFor="hs-pro-dappinm"
                className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
              >
                Firstname
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              <input
                id="hs-pro-dappinm"
                onChange={(e) => setData("first_name", e.target.value)}
                defaultValue={data.first_name}
                type="text"
                className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Enter your firstname"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Enter your full name, or a display name you are comfortable with.
              </p>
              {errors.first_name && (
                <div>
                  {" "}
                  <FormError message={errors.first_name} />
                </div>
              )}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label
                htmlFor="hs-pro-dappiun"
                className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
              >
                Name
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              <input
                id="hs-pro-dappiun"
                type="text"
                defaultValue={data.name}
                className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Enter name"
                onChange={(e) => setData("name", e.target.value)}
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Enter your display name on Preline public forums.
              </p>
              {errors.name && (
                <div>
                  {" "}
                  <FormError message={errors.name} />
                </div>
              )}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label
                htmlFor="hs-pro-dappiun"
                className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
              >
                Middle Name
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              <input
                id="hs-pro-dappiun"
                onChange={(e) => setData("middle_name", e.target.value)}
                type="text"
                defaultValue={data.middle_name}
                className="py-1.5 sm:py-2 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-yellow-500 focus:ring-yellow-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Enter middle name"
              />
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Enter your display name on Preline public forums.
              </p>
              {errors.middle_name && (
                <div>
                  {" "}
                  <FormError message={errors.middle_name} />
                </div>
              )}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label
                htmlFor="hs-pro-dappiun"
                className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
              >
                Description Note
              </label>
            </div>
            {/* End Col */}
            <div className="sm:col-span-8 xl:col-span-4">
              <PrelineTiptapEditor onUpdate={(content) => setData("bio", content)} value={data.bio}/>
              <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">
                Enter your display name on Preline public forums.
              </p>
              {errors.bio && (
                <div>
                  {" "}
                  <FormError message={errors.bio} />
                </div>
              )}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          {/* Grid */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
              <label className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500">
                Location
              </label>
            </div>
            <SelectCountryField
              options={allCountries}
              defaultSelected={userLocation.iso_code != null? userLocation.iso_code : "AF"}
              onChangeCallBack={(country) => setData("location", JSON.stringify(Country.getCountryByCode(country)))}
              labelFor="country"
              error={errors.location}
              required
            />
          </div>
          {/* End Grid */}
          {/* Button Group */}
          <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2" />
            <div className="sm:col-span-8 xl:col-span-4">
              <div className="flex gap-x-3">
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-600 text-dark hover:bg-yellow-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-yellow-500"
                  onClick={update}
                >
                  Save changes
                </button>
                {/*<button*/}
                {/*  type="button"*/}
                {/*  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"*/}
                {/*>*/}
                {/*  Cancel*/}
                {/*</button>*/}
              </div>
            </div>
          </div>
          {/* End Button Group */}
        </div>
        {/* End Personal Info */}
      </form>
      {/* End Form */}
      {/* End Account Card */}
    </SettingsLayout>
  );
};

export default GeneralSettings;
