<?php

$file = 'email.txt';

if (isset($_POST['email'])) {
    file_put_contents($file, $_POST['email'] . PHP_EOL, FILE_APPEND | LOCK_EX);
}
