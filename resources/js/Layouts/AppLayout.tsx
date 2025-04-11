import { useState, FormEvent } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';


interface Props {
    title?: string;
    children?: React.ReactNode;
}

export default function AppLayout({ title, children }: Props) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const { auth, jetstream } = usePage().props as any;

    const switchToTeam = (team: any) => {
        router.put("/current-team.update", {
            team_id: team.id,
        }, {
            preserveState: false,
        });
    };

    const logout = () => {
        router.post('/logout');
    };
    return (
        <div>
            <Head title={title} />
            {/* Navigation and content structure à compléter */}
            {children}
        </div>
    );
}
