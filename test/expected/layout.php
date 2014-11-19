<!DOCTYPE html>
<html>
  <head>
    <title><?php echo htmlspecialchars($title, ENT_QUOTES, 'UTF-8'); ?></title>
  </head>
  <body>
    <ul id="ul-list" data="<?php echo $interlaced; ?>" class="active"><?php foreach ($this->list as $list): ?>
      <li class="foo bar"><?php echo $list; ?></li><?php endforeach ?>
    </ul>
  </body>
</html>