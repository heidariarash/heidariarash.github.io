document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const submitButton = document.getElementById('submitButton');
    const formStatus = document.getElementById('formStatus');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const receptionError = document.getElementById('receptionError');

    // IMPORTANT: Replace with YOUR Google Apps Script Web App URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz9HOSke2oUAmcKOR6d-XDwjpHfrk3KI0SzGK-7Ul3K7QVEjK132obmdDALleEFvM0O/exec";

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        if (!validateForm()) {
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Submitting...';
        formStatus.textContent = '';
        formStatus.className = 'form-status-message';


        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            reception: formData.get('reception')
        };

        fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'cors', // Important for getting response back from Apps Script
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            body: JSON.stringify(data) 
        })
        .then(response => response.json())
        .then(result => {
            if (result.result === "success") {
                formStatus.textContent = result.message || "Registration successful!";
                formStatus.classList.add('success');
                form.reset(); // Clear the form
            } else {
                formStatus.textContent = result.message || "An error occurred. Please try again.";
                formStatus.classList.add('error');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            formStatus.textContent = 'An error occurred while submitting. Please check your connection and try again.';
            formStatus.classList.add('error');
        })
        .finally(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Submit Registration';
        });
    });

    function validateForm() {
        let isValid = true;
        emailError.textContent = '';
        receptionError.textContent = '';

        // Email validation
        const emailValue = emailInput.value.trim();
        if (!emailValue || !isValidEmail(emailValue)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // Reception radio button validation
        const receptionSelected = document.querySelector('input[name="reception"]:checked');
        if (!receptionSelected) {
            receptionError.textContent = 'Please select an option for reception attendance.';
            isValid = false;
        }
        
        return isValid;
    }

    function isValidEmail(email) {
        // Basic email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Copyright year
    const currentYearSpan = document.getElementById('currentYearRegistration');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});