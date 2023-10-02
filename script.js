document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Here, you can send the message data to your server using AJAX or fetch API
        // Example:
        // fetch('/your-server-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ name, email, message }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle the response from the server, e.g., display a success message.
        //     console.log(data);
        // })
        // .catch(error => {
        //     // Handle errors, e.g., display an error message.
        //     console.error(error);
        // });

        // For this example, let's just alert a message.
        alert('Message sent successfully!');
        contactForm.reset();
    });
});