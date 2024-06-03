const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_btn2 = document.querySelector("#sign-in-btn2");
const sign_up_btn2 = document.querySelector("#sign-up-btn2");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

sign_up_btn2.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn2.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    fetch('signup.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            username: username,
            email: email,
            password: password
        })
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Signup successful') {
            alert('Signup successful! Logging in...');
            document.getElementById('login-email').value = email;
            document.getElementById('login-password').value = password;
            document.getElementById('sign-in-form').submit();
        } else if (data === 'Email already registered') {
            alert('Email already registered');
        } else {
            alert('Signup failed: ' + data);
        }
    });
});

document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    fetch('login.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            email: email,
            password: password
        })
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Login successful') {
            alert('Login successful!');
            // Redirect to another page or handle post-login logic here
        } else {
            alert('Login failed: ' + data);
        }
    });
});



document.getElementById('reset-password-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById('reset-email').value;
    const newPassword = document.getElementById('reset-new-password').value;
    const confirmPassword = document.getElementById('reset-confirm-password').value;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match');
        return; // Exit the function early if passwords don't match
    }

    // Implement password reset logic here
    fetch('reset_password.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            'reset-email': email,
            'reset-new-password': newPassword,
            'reset-confirm-password': confirmPassword
        })
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Password resest successful') {
            alert('Password reset successful');
            document.getElementById('reset-email').value = ''; // Clear input fields
            document.getElementById('reset-new-password').value = '';
            document.getElementById('reset-confirm-password').value = '';
            document.getElementById('reset-status').innerText = 'Password reset successful'; // Update status message
        } else {
            alert('Error: ' + data);
        }
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
});
