<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $file_path = 'users.csv';
    $email_exists = false;

    // Check if the email is already registered
    if (file_exists($file_path)) {
        $file = fopen($file_path, 'r');
        while (($data = fgetcsv($file)) !== FALSE) {
            if ($data[1] == $email) {
                $email_exists = true;
                break;
            }
        }
        fclose($file);
    }

    if ($email_exists) {
        echo 'Email already registered';
    } else {
        // Save user data to CSV file
        $file = fopen($file_path, 'a');
        fputcsv($file, [$username, $email, $password]);
        fclose($file);

        echo 'Signup successful';
    }
}
?>