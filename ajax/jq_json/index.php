<!doctype html>
<html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>1</title>
        <link href="css/styles.css" rel="stylesheet">
    </head>
    <body>
        <form class="app">
            Country <br>
            <select name="country">
                <option value="">Default</option>
            </select> 
            City
            <select name="town" disabled>
                <option value="">Default</option>
            </select>
        </form>
        <div class="loading">...</div>
        <ul class="res"></ul>
        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/scripts.js"></script>
    </body>
</html>
