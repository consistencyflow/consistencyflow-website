// JavaScript for the Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinksContainer = document.querySelector('.nav-links-container');

    // Toggle the menu on button click
    menuToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});

// JavaScript for the Contact Form
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            
            const formData = new FormData(contactForm);
            const action = contactForm.action;
            
            try {
                const response = await fetch(action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    contactForm.style.display = 'none';
                    if (successMessage) {
                        successMessage.style.display = 'block';
                    }
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            } catch (error) {
                alert('Oops! There was a problem submitting your form.');
            }
        });
    }
});

// JavaScript for the Waitlist Form (from blog-post.html)
document.addEventListener('DOMContentLoaded', () => {
    const waitlistForm = document.getElementById('waitlist-form');
    const waitlistSuccessMessage = document.getElementById('waitlist-success-message');

    if (waitlistForm) {
        waitlistForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const form = event.target;
            const data = new FormData(form);
            const action = form.action;
            
            try {
                const response = await fetch(action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    form.style.display = 'none';
                    if (waitlistSuccessMessage) {
                        waitlistSuccessMessage.style.display = 'block';
                    }
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            } catch (error) {
                alert('Oops! There was a problem submitting your form.');
            }
        });
    }
});

