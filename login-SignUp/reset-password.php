<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['reset-email'];
    $newPassword = $_POST['reset-new-password'];
    $confirmPassword = $_POST['reset-confirm-password'];

    // Check if passwords match
    if ($newPassword !== $confirmPassword) {
        echo 'Passwords do not match';
        exit();
    }

    // Load CSV file and update password
    $file = fopen('users.csv', 'r');
    if ($file) {
        $updated = false;
        $rows = [];
        $tempFile = fopen('temp_users.csv', 'w'); // Temporary file
        if ($tempFile) {
            while (($row = fgetcsv($file)) !== false) {
                if ($row[1] === $email) { // Check against the email field (index 1)
                    // Update password in plain text
                    $row[2] = $newPassword;
                    $updated = true;
                }
                $rows[] = $row; // Store row in memory
            }
            fclose($file);

            // Write all rows to the temporary file
            foreach ($rows as $row) {
                fputcsv($tempFile, $row);
            }
            fclose($tempFile);

            if ($updated) {
                // Replace original file with temporary file
                if (rename('temp_users.csv', 'users.csv')) {
                    echo 'Password reset successful';
                } else {
                    echo 'Error: Unable to replace the original file';
                }
            } else {
                echo 'Error: Email not found';
            }
        } else {
            fclose($file);
            echo 'Error: Unable to open temporary file for writing';
        }
    } else {
        echo 'Error: Unable to open file for reading';
    }
} else {
    echo 'Invalid request';
}
?>
