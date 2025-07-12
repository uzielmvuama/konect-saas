import React from "react";

// @ts-ignore
interface InputWithIconImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconSrc: string;
  placeHolder?: string;
  name: string;
  value: string;
  label?: string;
  onChange: (name: string, value: string) => void;
  iconClassName?: string; // << ajout ici
}

const InputWithIconImage: React.FC<InputWithIconImageProps> = ({
  iconSrc,
  name,
  value,
  label,
  onChange,
  iconClassName = "",
  placeHolder = "www.example.com",
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <div className="max-w-sm space-y-3">
      {label && (
        <label htmlFor={name} className="block text-sm text-gray-700 font-medium dark:text-white">
          {label}
        </label>
      )}

      <div className="flex rounded-lg mt-2">
        <div className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 dark:bg-neutral-700 dark:border-neutral-600">
          <img src={iconSrc} alt={name} className={`${iconClassName} w-4 h-4 rounded`} />
        </div>

        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className="py-1.5 sm:text-sm sm:py-2 px-4 pe-11 block w-full border-gray-200 rounded-e-lg yellow focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          placeholder="www.example.com"
          {...props}
        />
      </div>
    </div>
  );
};

export default InputWithIconImage;
