import { ICountry } from "country-state-city";
import React, { useState } from "react";
import FormError from "@/Components/Errors/FormError";

interface SelectCountryFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  labelFor: string;
  className?: string;
  name?: string;
  options: Array<ICountry>;
  defaultSelected: string;
  error?: string;
  onChangeCallBack?: (country: string) => void;
}

const SelectCountryField: React.FC<SelectCountryFieldProps> = ({
  disabled = false,
  className = "",
  labelFor = "",
  name,
  options,
  defaultSelected,
  onChangeCallBack,
  error = "",
  ...props
}) => {
  const [selectedCoundtry, setSelectedCountry] = useState<string>(defaultSelected);
  // console.log(defaultSelected);
  return (
    <div className="sm:col-span-8 xl:col-span-4">
      {/* Select */}
      <div className="relative">
        <select
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            onChangeCallBack!(e.target.value);
          }}
          defaultValue={selectedCoundtry}
          id={labelFor}
          data-hs-select='{
                "placeholder": "Country",
                "hasSearch": true,
                "searchPlaceholder": "Country",
                "searchClasses": "block w-full sm:text-sm border-gray-200 rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-400 py-1.5 sm:py-2 px-3",
                "searchWrapperClasses": "bg-white p-2 -mx-1 sticky top-0 dark:bg-neutral-900",
                "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span data-icon></span><span class=\"text-gray-800 dark:text-neutral-200\" data-title></span></button>",
                "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 sm:py-2 ps-3 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-hidden dark:focus:ring-1 dark:focus:ring-neutral-600",
                "dropdownClasses": "max-h-64 p-1 pt-0 space-y-0.5 z-50 w-full overflow-hidden overflow-y-auto bg-white rounded-xl shadow-xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900",
                "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
                "optionTemplate": "<div><div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div class=\"text-gray-800 dark:text-neutral-200\" data-title></div></div></div>",
                "preventSearchFocus": false,
                "viewport": "#null.id"
              }'
          className="hidden"
        >
          {options.map((country, i) => (
            <option
              key={i}
              value={country.isoCode}
              data-hs-select-option={JSON.stringify({
                icon: `<span class="inline-block size-4 rounded-full">${country.flag}</span>`,
              })}
            >
              {country.name}
            </option>
          ))}
          {/*<option*/}
          {/*    value="AF"*/}
          {/*    data-hs-select-option='{*/}
          {/*"icons": "<img class=\"inline-block size-4 rounded-full\" src=\"../assets/vendor/svg-country-flags/png100px/af.png\" alt=\"Afghanistan\" />"}'*/}
          {/*>*/}
          {/*    Afghanistan*/}
          {/*</option>*/}
        </select>
        {error && (
          <div>
            {" "}
            <FormError message={error} />
          </div>
        )}

        <div className="absolute top-1/2 end-2.5 -translate-y-1/2">
          <svg
            className="shrink-0 size-3.5 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </div>
      {/* End Select */}
    </div>
  );
};

export default SelectCountryField;
