<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="ltr" class="relative min-h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

    {{-- Open Graph --}}
    <meta property="og:type" content="profile">
    <meta property="og:title" content="{{ $og_title ?? '' }}">
    <meta property="og:description" content="{{ $og_desc ?? '' }}">
    <meta property="og:image" content="{{ $og_image ?? '' }}">
    <meta property="og:url" content="{{ $og_url ?? request()->fullUrl() }}">
    <meta property="og:site_name" content="{{ $og_site_name ?? config('app.name') }}">

    {{-- Twitter Card --}}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $og_title ?? '' }}">
    <meta name="twitter:description" content="{{ $og_desc ?? '' }}">
    <meta name="twitter:image" content="{{ $og_image ?? '' }}">


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
