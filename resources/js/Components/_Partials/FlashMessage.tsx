import { usePage } from "@inertiajs/react";
import FormError from "@/Components/Errors/FormError";

const FlashMessage = () => {
  const { flash } = usePage().props;
  // @ts-ignore
  const success = flash?.success;
  // @ts-ignore
  const error = flash?.error;

  return (
    <>
      {success && (
        <div className="mb-4 rounded-lg bg-green-100 text-green-800 px-4 py-3 text-sm border border-green-300">
          {success}
        </div>
      )}
      {error && <FormError message={error} />}
    </>
  );
};

export default FlashMessage;
