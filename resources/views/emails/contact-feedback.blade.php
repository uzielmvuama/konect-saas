@php
    $firstname = ucfirst($firstname ?? '');
    $name = ucfirst($name ?? '');
@endphp

<x-mail::message>
    # {{ __('Konect Sharing Feedback') }}

    {{ __('A Konecter shared their information with you.') }}

    ## {{ __('Details') }}

    - **{{ __('Firstname') }}:** {{ $firstname }}
    - **{{ __('Name') }}:** {{ $name }}
    - **{{ __('Email') }}:** {{ $email }}
    - **{{ __('Phone number') }}:** {{ $phone }}
    - **{{ __('Note') }}:** {{ $comment }}

    <x-mail::button :url="$url">
        {{ __('Save Contact') }}
    </x-mail::button>

    {{ config('app.name') }}
</x-mail::message>
