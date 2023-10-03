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

 // JavaScript code to change the content of the paragraph based on a media query
    const aboutParagraph = document.getElementById('about-paragraph');
    
    // Check the screen width using JavaScript
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    if (screenWidth < 767) {
        aboutParagraph.textContent = "I'm a passionate software engineer skilled in Java, Spring Boot, SQL, HTML, CSS, and JavaScript. I excel in building robust web applications and believe in teamwork to achieve exceptional results. I'm dedicated to innovation and eager to contribute to cutting-edge projects that positively impact people's lives.";
    } else {
        aboutParagraph.textContent = "I am a passionate and results-driven software engineer with expertise in Java, Spring Boot, SQL, HTML, CSS, and JavaScript. My journey in the world of software development has been marked by a relentless pursuit of excellence and a commitment to creating innovative solutions  My experience in building web applications using the latest technologies has equipped me with the skills to develop robust, scalable, and user-friendly software. Whether it's crafting efficient backend logic with Java and Spring Boot or creating dynamic and engaging frontend interfaces with HTML, CSS, and JavaScript, I thrive on the challenges of turning ideas into reality.In addition to my technical prowess, I am a collaborator at heart. I believe in the power of teamwork and effective communication to deliver exceptional results. My goal is to continuously expand my skill set, embrace new technologies, and contribute to cutting-edge projects that make a positive impact on people's lives.I am excited about the endless possibilities in the world of software engineering and look forward to taking on new challenges and creating meaningful solutions.";
    }

