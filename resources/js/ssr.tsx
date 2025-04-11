import React from 'react';
import { renderToString } from 'react-dom/server';
import createServer from '@inertiajs/react/server';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Konect';

createServer(page =>
    createInertiaApp({
        page,
        render: renderToString,
        title: title => `${title} - ${appName}`,
        resolve: name =>
            resolvePageComponent(
                `./Pages/${name}.tsx`,
                import.meta.glob('./Pages/**/*.tsx')
            ),
        setup: ({ App, props }) => <App {...props} />,
    })
);
