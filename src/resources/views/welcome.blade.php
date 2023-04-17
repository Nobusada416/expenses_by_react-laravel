<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>家計簿アプリ</title>
        <!-- Fonts -->
        {{-- <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet"> --}}

        <!-- Styles -->
        {{-- <link rel="stylesheet" href="{{ mix('css/app.css') }}"> --}}
        @viteReactRefresh
        @vite('resources/react/src/main.tsx')
    </head>
    <body>
        <div id="root"></div>
    </body>
    {{-- <script src="{{ mix('/js/index.js') }}"></script> --}}
</html>
