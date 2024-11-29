document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const age = document.getElementById('age').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // Validation checks
  if (!firstName || !lastName || !age || !email || !phone) {
    alert('Please fill out all fields.');
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return;
  }

  // Populate the details box with the form values
  document.getElementById('displayFirstName').textContent = firstName;
  document.getElementById('displayLastName').textContent = lastName;
  document.getElementById('displayAge').textContent = age;
  document.getElementById('displayEmail').textContent = email;
  document.getElementById('displayPhone').textContent = phone;

  // Show the details box
  const detailsBox = document.getElementById('detailsBox');
  detailsBox.style.display = 'block';

  // Success message
  const messageDiv = document.getElementById('message');
  messageDiv.textContent = 'Thank you, ${firstName} ${lastName}! Your message has been submitted successfully.';

  // Reset form
  document.getElementById('contactForm').reset();
});