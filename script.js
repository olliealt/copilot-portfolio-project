// Function to toggle the navigation menu’s visibility
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('visible');
}

// Add event listener to the hamburger icon
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Implement smooth scrolling behavior for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('#projects article');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Add event listeners to filter buttons
document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        filterProjects(category);
    });
});

// Function to display images in a modal view (lightbox effect)
function openLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="Project Image">
            <span class="close-lightbox">&times;</span>
        </div>
    `;
    document.body.appendChild(lightbox);

    // Close lightbox when clicking the close button
    lightbox.querySelector('.close-lightbox').addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// Add event listeners to project images
document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', function () {
        openLightbox(this.src);
    });
});

// Function to validate the contact form
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    // Check if name is filled
    if (name.value.trim() === '') {
        valid = false;
        name.classList.add('error');
    } else {
        name.classList.remove('error');
    }

    // Check if email is filled and valid
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        valid = false;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    // Check if message is filled
    if (message.value.trim() === '') {
        valid = false;
        message.classList.add('error');
    } else {
        message.classList.remove('error');
    }

    // If form is valid, submit it
    if (valid) {
        document.querySelector('#contact form').submit();
    }
}

// Add event listener to the contact form
document.querySelector('#contact form').addEventListener('submit', validateForm);

// Real-time feedback for form fields
document.querySelectorAll('#contact input, #contact textarea').forEach(input => {
    input.addEventListener('input', function () {
        if (this.value.trim() === '') {
            this.classList.add('error');
        } else {
            this.classList.remove('error');
        }
    });
});