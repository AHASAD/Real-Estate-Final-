document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const closeBtn = document.querySelector('.close');

    // Close modal
    closeBtn.addEventListener('click', function() {
        document.getElementById('registerModal').style.display = 'none';
    });

    // Form validation
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Reset errors
        document.querySelectorAll('.error').forEach(error => error.textContent = '');

        // Validate Full Name
        const fullName = document.getElementById('fullName');
        if (!fullName.value.trim()) {
            document.getElementById('nameError').textContent = 'Name is required';
            isValid = false;
        } else if (fullName.value.length < 2) {
            document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
            isValid = false;
        }

        // Validate Mobile
        const mobile = document.getElementById('mobile');
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobile.value.trim()) {
            document.getElementById('mobileError').textContent = 'Mobile number is required';
            isValid = false;
        } else if (!mobileRegex.test(mobile.value)) {
            document.getElementById('mobileError').textContent = 'Please enter a valid 10-digit mobile number';
            isValid = false;
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim()) {
            document.getElementById('emailError').textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email.value)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate Password
        const password = document.getElementById('password');
        if (!password.value) {
            document.getElementById('passwordError').textContent = 'Password is required';
            isValid = false;
        } else if (password.value.length < 6) {
            document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
            isValid = false;
        }

        // Validate Confirm Password
        const confirmPassword = document.getElementById('confirmPassword');
        if (!confirmPassword.value) {
            document.getElementById('confirmPasswordError').textContent = 'Please confirm your password';
            isValid = false;
        } else if (confirmPassword.value !== password.value) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
            isValid = false;
        }

        if (isValid) {
            // Form is valid, you can submit it here
            console.log('Form submitted successfully');
            // Reset form
            form.reset();
        }
    });
});