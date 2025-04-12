import "preline";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import PrelineProviderLayout from "@/Layouts/PrelineProviderLayout";

createInertiaApp({
    resolve: name =>
        resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<>
            <App {...props} />
            </>
        );
    },
});
