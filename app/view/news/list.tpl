<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Egg 模板引擎</title>
  <link rel="stylesheet" href="/public/css/new.css">
</head>
<body>
  <ul class="news-view view">
    {% for item in list %}
      <li class="item">
        <a href="{{ item.url }}">{{item.title }}</a>
        <!-- {{ item.title }}、{{ item.url }} -->
        <p>{{ helper.relativeTime(item.time) }}</p>
      </li>
    {% endfor %}
  </ul>
</body>
</html>