// login.js (similar logic can be applied to signup.js)
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials (this is a simplified example)
    if (username === 'yourUsername' && password === 'yourPassword') {
        // Redirect to the authenticated page
        window.location.href = 'authenticated.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
function submitFormData(){
    var name = document.getElementById("new-username").value;
    var newPassword = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var message = document.getElementById("message").value;
    if (name !== "" && newPassword !== "" && confirmPassword !== "" && newPassword==confirmPassword);
      alert("Hey " +   name + " " + "thank you for contacting us.Delani Studio has received your message");
    event.preventDefault();
    }

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Get input values
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate input (simplified validation)
    if (newPassword !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        return;
    }

    // Simulate user registration (in a real application, this would involve server-side logic)
    const newUser = {
        username: newUsername,
        password: newPassword,
    };

    // Assuming you have a function for handling user registration
    registerUser(newUser);

    // Redirect to a confirmation or login page (you can customize this)
    window.location.href = 'confirmation.html';
});

// Simulated user registration function (replace this with server-side logic)
function registerUser(newUser) {
    // Simulate user registration by printing the user details to the console
    console.log('New User Registered:');
    console.log('Username: ' + newUser.username);
    console.log('Password: ' + newUser.password);
}

