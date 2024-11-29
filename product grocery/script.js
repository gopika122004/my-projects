// Initialize EmailJS with your user ID (replace 'YOUR_USER_ID' with your actual EmailJS user ID)
emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS User ID

// Function to handle form submission and send email via EmailJS
function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // EmailJS message payload
    const emailMessage = {
        to_email: 'your-email@example.com', // Replace with your email
        subject: 'New Contact Us Form Submission',
        message: `Hello, I am ${firstName} ${lastName}. Here are my details:\nEmail: ${email}\nPhone: ${phone}`
    };

    console.log('Sending email with data:', emailMessage); // Debugging message

    // Send the email using EmailJS
    emailjs
        .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailMessage) // Replace with actual values
        .then(
            (response) => {
                console.log('Email sent successfully:', response);
                showSuccessMessage(); // Show success message to the user
                document.getElementById('contactForm').reset(); // Reset the form
            },
            (error) => {
                console.error('Error sending email:', error);
                alert('Failed to send message. Please try again later.');
            }
        );

    // Send WhatsApp message (optional)
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number (include country code)
    const message = `Hello, I am ${firstName} ${lastName}. Here are my details:\nEmail: ${email}\nPhone: ${phone}`;
    sendWhatsAppMessage(phoneNumber, message);
}

// Function to show success message
function showSuccessMessage() {
    console.log('Showing success message'); // Debugging message

    // Create a success message element
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Your message has been sent successfully!';
    successMessage.className = 'alert alert-success mt-3'; // Bootstrap classes for styling

    // Insert the success message into the DOM, after the form
    const form = document.querySelector('form');
    form.insertAdjacentElement('afterend', successMessage);

    // Automatically hide the message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);
}

// Function to send WhatsApp message
function sendWhatsAppMessage(phoneNumber, message) {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}
