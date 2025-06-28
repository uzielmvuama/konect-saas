import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { initializePreline } from "@/Utils/preline-init";

interface Props {
  children?: React.ReactNode;
}

const PrelineProviderLayout = ({ children }: Props) => {
  const page = usePage();

  useEffect(() => {
    // Listen to Inertia navigation
    document.addEventListener("inertia:after", initializePreline);

    // Clean up listener
    return () => {
      document.removeEventListener("inertia:after", initializePreline);
    };
  }, [page.url]);

  return <>{children}</>;
};

export default PrelineProviderLayout;
