<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check user credentials
    $file = fopen('users.csv', 'r');
    $isValid = false;
    while (($user = fgetcsv($file)) !== FALSE) {
        if ($user[1] == $email && $user[2] == $password) {
            $isValid = true;
            break;
        }
    }
    fclose($file);

    if ($isValid) {
        echo 'Login successful';
    } else {
        echo 'Invalid credentials';
    }
}
?>
