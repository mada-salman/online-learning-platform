// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Module Progress Tracking
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        const progressBar = card.querySelector('.progress');
        const progress = Math.floor(Math.random() * 100); // Simulated progress
        progressBar.style.width = `${progress}%`;
    });

    // Quiz Functionality
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        const quizOptions = quizContainer.querySelectorAll('.quiz-options label');
        quizOptions.forEach(option => {
            option.addEventListener('click', function() {
                const answer = this.querySelector('input').value;
                if (answer === 'correct') {
                    alert('Correct! Well done!');
                } else {
                    alert('Incorrect. Try again!');
                }
            });
        });
    }

    // Coding Challenge Functionality
    const challengeButton = document.querySelector('.challenge-container button');
    if (challengeButton) {
        challengeButton.addEventListener('click', function() {
            alert('Starting Data Analysis Challenge...');
            // Add actual challenge implementation here
        });
    }

    // Project Functionality
    const projectButton = document.querySelector('.project-container button');
    if (projectButton) {
        projectButton.addEventListener('click', function() {
            alert('Starting Machine Learning Project...');
            // Add actual project implementation here
        });
    }

    // Forum Functionality
    const newTopicButton = document.querySelector('.forum-header button');
    if (newTopicButton) {
        newTopicButton.addEventListener('click', function() {
            alert('Starting new forum topic...');
            // Add actual forum topic creation here
        });
    }

    // Progress Tracking Animation
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50; // Adjust speed of animation

        function updateStat() {
            if (current < target) {
                current += increment;
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target;
            }
        }

        updateStat();
    });

    // Mobile Navigation Toggle
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '☰';
    navbar.insertBefore(menuButton, navLinks);

    menuButton.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Video Player Functionality
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        // Add video player controls here
        // This is a placeholder for actual video player implementation
    }

    // Certificate Animation
    const certificateCards = document.querySelectorAll('.certificate-card');
    certificateCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Job Role Hover Effects
    const jobRoles = document.querySelectorAll('.job-role');
    jobRoles.forEach(role => {
        role.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        role.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form Validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                alert('Message sent successfully!');
                this.reset();
            } else {
                alert('Please fill in all fields');
            }
        });
    }

    // Code Snippet Syntax Highlighting
    const codeSnippets = document.querySelectorAll('.code-snippet');
    codeSnippets.forEach(snippet => {
        // Add syntax highlighting here
        // This is a placeholder for actual syntax highlighting implementation
    });

    // Interactive Module Cards
    moduleCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Resource Card Hover Effects
    const resourceCards = document.querySelectorAll('.resource-card');
    resourceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 