<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>家計簿アプリ</title>
        @viteReactRefresh
        @vite('resources/react/src/main.tsx')
    </head>
    <body>
        <div id="root"></div>
    </body>
</html>
