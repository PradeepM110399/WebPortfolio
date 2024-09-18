// Mobile menu toggle
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Skill progress bar animation
window.addEventListener('scroll', () => {
    const skillBars = document.querySelectorAll('.progress-bar');

    skillBars.forEach(bar => {
        const barPosition = bar.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (barPosition < screenPosition) {
            bar.style.width = bar.getAttribute('data-skill-level');
        }
    });
});

// Modal functionality for project preview
const projects = document.querySelectorAll('.project');
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.getElementById('close-modal');

// Add event listeners to each project
projects.forEach((project, index) => {
    project.addEventListener('click', () => {
        if (index === 0) {
            modalContent.innerHTML = `
                <h2>Project 1: Portfolio Website</h2>
                <p>A responsive portfolio website showcasing my projects and skills.</p>
                <p>Technologies: HTML, CSS, JavaScript</p>
                <a href="https://github.com/pradeepm/portfolio" target="_blank">View Source Code</a>
            `;
        } else if (index === 1) {
            modalContent.innerHTML = `
                <h2>Project 2: E-commerce Website</h2>
                <p>A dynamic and responsive e-commerce website built using HTML, CSS, and JavaScript.</p>
                <p>Technologies: HTML, CSS, JavaScript</p>
                <a href="https://github.com/pradeepm/ecommerce" target="_blank">View Source Code</a>
            `;
        }
        modal.style.display = 'block';
    });
});

// Close modal when close button or outside of modal is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});
