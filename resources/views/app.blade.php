<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr" class="relative min-h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

    <!-- Scripts -->
    @routes
    {{--        @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.vue"])--}}
    @viteReactRefresh
    @vite(['resources/css/app.css','resources/js/app.tsx'])

    @inertiaHead
</head>
<body class="bg-white dark:bg-neutral-900">
@inertia

{{--<script src="/node_modules/preline/dist/preline.js"></script>--}}
</body>
</html>
