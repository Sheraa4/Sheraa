document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let age = document.getElementById('age').value.trim();
    let course = document.getElementById('course').value.trim();
    let errorMessage = document.getElementById('error-message');

    // Reset error message
    errorMessage.textContent = "";
    errorMessage.style.color = "red";

    // Basic validation
    if (!name || !email || !age || !course) {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    if (isNaN(age) || age < 1 || age > 120) {
        errorMessage.textContent = "Please enter a valid age.";
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // If validation passes
    errorMessage.textContent = "Registration successful!";
    errorMessage.style.color = "green";

    // Clear the form
    document.getElementById('registrationForm').reset();
});

function validateEmail(email) {
    let re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}