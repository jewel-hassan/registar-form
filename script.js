function validateForm(event) {

    event.preventDefault();

    // Reset error messages
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    // Fetch form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Simple validation
    if (username.length < 6) {
        document.getElementById('usernameError').innerHTML = 'Username must be at least 6 characters';
        return;
    }

    // Email validation regex (basic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        return;
    }

    // If validation passes, create a JSON object
    const profileData = {
        username: username,
        email: email,
        // Add other fields as needed
    };

    // Convert the data to JSON
    const jsonData = JSON.stringify(profileData, null, 2);

    // Display toast message
    showToast('Validation successful');

    // Save JSON file
    saveJSON(jsonData);
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerHTML = message;
    toast.style.display = 'block';
    setTimeout(function () {
        toast.style.display = 'none';
    }, 2000); // Hide the toast after 2 seconds
}

function previewImage() {
    const input = document.getElementById('profileImage');
    const preview = document.getElementById('imagePreview');
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
            // preview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
}

function saveJSON(jsonData) {
    // Create a Blob with the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a data URL for the Blob
    const dataUrl = URL.createObjectURL(blob);

    // Get the download link element
    const downloadLink = document.getElementById('downloadLink');

    // Set the href attribute to the data URL
    downloadLink.href = dataUrl;

    // Display the link
    downloadLink.style.display = 'block';

    // Display toast message
    showToast('JSON file saved successfully');
}
