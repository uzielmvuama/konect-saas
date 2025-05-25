import { useForm } from "@inertiajs/react";
import AuthLayout from "@/Layouts/AuthLayout";
import FormError from "@/Components/Errors/FormError";

interface ForgotPasswordProps {
  status?: string;
}

export default function ForgotPassword({ status }: ForgotPasswordProps) {
  const { data, setData, post, processing, errors, reset, transform } = useForm({
    email: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post("/forgot-password", {
      onFinish: () => null,
    });
  };

  return (
    <AuthLayout title={"Log in"}>
      {/* Content */}
      <div className="grow px-5">
        <div className="h-full min-h-screen sm:w-112 flex flex-col justify-center mx-auto space-y-5">
          {/* Title */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
              Reset your password
            </h1>
            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
              Enter the email address associated with your account. We’ll send you a link to reset
              your password.
            </p>
          </div>
          {/* End Title */}

          <form>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="hs-pro-dale"
                  className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="hs-pro-dale"
                  className="py-2 sm:py-2.5 px-3 block w-full border-gray-200 rounded-lg sm:text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                  placeholder="you@email.com"
                  onChange={(e) => setData("email", e.target.value)}
                />
                {errors.email && <FormError message={errors.email} />}
              </div>

              <button
                type="button"
                className="py-2.5 px-3 w-full inline-flex justify-center items-center gap-x-2 text-start bg-blue-600 border border-blue-600 text-white text-sm font-medium rounded-lg shadow-2xs align-middle hover:bg-blue-700 focus:outline-hidden focus:ring-1 focus:ring-blue-300 dark:focus:ring-blue-500"
              >
                Send email
              </button>
            </div>
          </form>

          <p className="text-sm text-gray-500 dark:text-neutral-500">
            You didn’t forget your password?
            <a
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-blue-500"
              href="#"
            >
              Sign in
              <svg
                className="shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>
      </div>
      {/* End Content */}
    </AuthLayout>
  );
}
