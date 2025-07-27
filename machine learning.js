// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Module progress tracking
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach(card => {
        const progressBar = card.querySelector('.progress');
        const progress = Math.floor(Math.random() * 100); // Simulated progress
        progressBar.style.width = `${progress}%`;
    });

    // Quiz functionality
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        const quizOptions = quizContainer.querySelectorAll('.quiz-options label');
        quizOptions.forEach(option => {
            option.addEventListener('click', function() {
                const isCorrect = this.getAttribute('data-correct') === 'true';
                alert(isCorrect ? 'Correct! Well done!' : 'Incorrect. Try again!');
            });
        });
    }

    // Coding challenge functionality
    const challengeButton = document.querySelector('.challenge-container button');
    if (challengeButton) {
        challengeButton.addEventListener('click', function() {
            alert('Starting ML Model Implementation Challenge...');
            // Add actual challenge implementation here
        });
    }

    // Project functionality
    const projectButton = document.querySelector('.project-container button');
    if (projectButton) {
        projectButton.addEventListener('click', function() {
            alert('Starting ML Project...');
            // Add actual project implementation here
        });
    }

    // Forum functionality
    const newTopicButton = document.querySelector('.forum-header button');
    if (newTopicButton) {
        newTopicButton.addEventListener('click', function() {
            alert('Starting new forum topic...');
            // Add actual forum topic creation here
        });
    }

    // Progress tracking animation
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

    // Mobile navigation toggle
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    navbar.insertBefore(mobileMenuButton, navLinks);

    mobileMenuButton.addEventListener('click', function() {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Video player functionality
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        // Add video player controls here
        // This is a placeholder for actual video player implementation
    }

    // Certificate animation
    const certificateCard = document.querySelector('.certificate-card');
    if (certificateCard) {
        certificateCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        certificateCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Job role hover effects
    const jobRoles = document.querySelectorAll('.job-role');
    jobRoles.forEach(role => {
        role.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        role.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Form validation
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
                alert('Please fill in all fields.');
            }
        });
    }

    // Code snippet syntax highlighting
    const codeSnippets = document.querySelectorAll('.code-snippet');
    codeSnippets.forEach(snippet => {
        // Add syntax highlighting here
        // This is a placeholder for actual syntax highlighting implementation
    });

    // Interactive module cards
    moduleCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Resource card hover effects
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