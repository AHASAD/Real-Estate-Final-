// JavaScript for the "View on Map" button functionality
document.addEventListener("DOMContentLoaded", () => {
    const viewMapBtn = document.getElementById("viewMapBtn")
  
    if (viewMapBtn) {
      viewMapBtn.addEventListener("click", (e) => {
        e.preventDefault()
  
        // You can replace these coordinates with the actual location
        const latitude = 40.7128
        const longitude = -74.006
  
        // Open Google Maps with the specified location
        window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, "_blank")
  
        // Alternatively, you could implement a modal with an embedded map
        // or navigate to a dedicated map page on your site
      })
    }
  
    // You can add more JavaScript functionality here as needed
    // For example, form validation for the "Send Us A Message" section
  })

   // scroll start
   window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // scroll End



//   Send a message

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    // Input fields
    const nameInput = document.getElementById('name');
    const cityInput = document.getElementById('city');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Error messages
    const nameError = document.getElementById('nameError');
    const cityError = document.getElementById('cityError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    
    // Validation functions
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameInput.classList.add('error');
            nameError.textContent = 'Name is required';
            return false;
        } else if (nameInput.value.trim().length < 2) {
            nameInput.classList.add('error');
            nameError.textContent = 'Name must be at least 2 characters';
            return false;
        } else {
            nameInput.classList.remove('error');
            nameError.textContent = '';
            return true;
        }
    }
    
    function validateCity() {
        if (cityInput.value.trim() === '') {
            cityInput.classList.add('error');
            cityError.textContent = 'City is required';
            return false;
        } else {
            cityInput.classList.remove('error');
            cityError.textContent = '';
            return true;
        }
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailInput.classList.add('error');
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailInput.classList.add('error');
            emailError.textContent = 'Please enter a valid email address';
            return false;
        } else {
            emailInput.classList.remove('error');
            emailError.textContent = '';
            return true;
        }
    }
    
    function validatePhone() {
        const phoneRegex = /^[0-9]{10,15}$/;
        if (phoneInput.value.trim() === '') {
            phoneInput.classList.add('error');
            phoneError.textContent = 'Phone number is required';
            return false;
        } else if (!phoneRegex.test(phoneInput.value.replace(/[^0-9]/g, ''))) {
            phoneInput.classList.add('error');
            phoneError.textContent = 'Please enter a valid phone number';
            return false;
        } else {
            phoneInput.classList.remove('error');
            phoneError.textContent = '';
            return true;
        }
    }
    
    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageInput.classList.add('error');
            messageError.textContent = 'Message is required';
            return false;
        } else if (messageInput.value.trim().length < 10) {
            messageInput.classList.add('error');
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        } else {
            messageInput.classList.remove('error');
            messageError.textContent = '';
            return true;
        }
    }
    
    // Add input event listeners for real-time validation
    nameInput.addEventListener('input', validateName);
    cityInput.addEventListener('input', validateCity);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    messageInput.addEventListener('input', validateMessage);
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all fields
        const isNameValid = validateName();
        const isCityValid = validateCity();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isMessageValid = validateMessage();
        
        // If all validations pass
        if (isNameValid && isCityValid && isEmailValid && isPhoneValid && isMessageValid) {
            // Here you would typically send the form data to a server
            alert('Form submitted successfully!');
            form.reset();
        }
    });
});
  
  