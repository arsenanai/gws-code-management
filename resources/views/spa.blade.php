<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ENS TRU</title>
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ mix('css/static.css') }}">
</head>
<body>
    <div id="app">
        <app></app>
    </div>
    <script type="text/javascript">
    	const passportClientId = "{{env('PASSPORT_CLIENT_ID')}}"
		const passportClientSecret = "{{env('PASSPORT_CLIENT_SECRET')}}"
    </script>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>