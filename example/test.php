<!DOCTYPE html>
<html>
  <head>
    <meta name="description" content="Powered by gulp-jade-php">
    <title>
      <?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></title>
  </head>
  <body>
    <ul>
      <?php foreach ($this->list as $list): ?>
      <li class="foo bar">
        <?php echo $list; ?></li>
      <?php endforeach; ?>
    </ul>
  </body>
</html>