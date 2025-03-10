const loginForm = document.getElementById('loginForm');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const closeBtn = document.querySelector('.close-btn');

        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function showError(element, message) {
            element.style.display = 'block';
            element.textContent = message;
        }

        function hideError(element) {
            element.style.display = 'none';
            element.textContent = '';
        }

        emailInput.addEventListener('input', () => {
            hideError(emailError);
        });

        passwordInput.addEventListener('input', () => {
            hideError(passwordError);
        });

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            // Email validation
            if (!emailInput.value.trim()) {
                showError(emailError, 'Email is required');
                isValid = false;
            } else if (!validateEmail(emailInput.value)) {
                showError(emailError, 'Please enter a valid email');
                isValid = false;
            }

            // Password validation
            if (!passwordInput.value) {
                showError(passwordError, 'Password is required');
                isValid = false;
            } else if (passwordInput.value.length < 6) {
                showError(passwordError, 'Password must be at least 6 characters');
                isValid = false;
            }

            if (isValid) {
                // Here you would typically handle the login logic
                console.log('Form submitted:', {
                    email: emailInput.value,
                    password: passwordInput.value
                });
            }
        });

        closeBtn.addEventListener('click', () => {
            // Here you would typically handle closing the form
            console.log('Form closed');
        });
    