import {useEffect} from 'react';
import {usePage} from '@inertiajs/react';
import {initializePreline} from "@/Utils/preline-init";

interface Props {
    children?: React.ReactNode;
}

const PrelineProviderLayout = ({children}: Props) => {
    const page = usePage();

    useEffect(() => {
        initializePreline();
    }, [page.url]); // Appelé à chaque navigation Inertia

    return <>
        {children}    </>;
};

export default PrelineProviderLayout;
