import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { initializePreline } from "@/Utils/preline-init";

interface Props {
  children?: React.ReactNode;
}

const PrelineProviderLayout = ({ children }: Props) => {
  const page = usePage();

  useEffect(() => {
    initializePreline();

    // Pour Inertia : relancer Preline à chaque navigation
    document.addEventListener("inertia:after", initializePreline);

    return () => {
      document.removeEventListener("inertia:after", initializePreline);
    };
  }, [page.url]); // Appelé à chaque navigation Inertia

  return <>{children} </>;
};

export default PrelineProviderLayout;
