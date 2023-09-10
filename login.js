document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    window.location.href = "login.html";
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    window.location.href = "signup.html";
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function registerUser(newUser) {
    console.log('New User Registered:');
    console.log('Username: ' + newUser.username);
    console.log('Password: ' + newUser.password);
}

