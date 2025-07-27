// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Module progress tracking
    const modules = document.querySelectorAll('.module-card');
    modules.forEach(module => {
        const progressBar = module.querySelector('.progress');
        const progress = Math.floor(Math.random() * 100); // Replace with actual progress tracking
        progressBar.style.width = `${progress}%`;
    });

    // Quiz functionality
    const quizContainer = document.querySelector('.quiz-container');
    if (quizContainer) {
        const options = quizContainer.querySelectorAll('input[type="radio"]');
        options.forEach(option => {
            option.addEventListener('change', function() {
                if (this.value === 'Create responsive layouts') {
                    alert('Correct! CSS Grid is primarily used for creating responsive layouts and complex grid-based designs.');
                } else {
                    alert('Incorrect. Try again!');
                }
            });
        });
    }

    // Coding challenge functionality
    const startChallengeBtn = document.querySelector('.start-challenge');
    if (startChallengeBtn) {
        startChallengeBtn.addEventListener('click', function() {
            alert('Starting Responsive Layout Challenge...');
            // Add challenge implementation here
        });
    }

    // Project functionality
    const startProjectBtn = document.querySelector('.start-project');
    if (startProjectBtn) {
        startProjectBtn.addEventListener('click', function() {
            alert('Starting Portfolio Website Project...');
            // Add project implementation here
        });
    }

    // Forum functionality
    const newTopicBtn = document.querySelector('.new-topic-btn');
    if (newTopicBtn) {
        newTopicBtn.addEventListener('click', function() {
            alert('Starting new topic...');
            // Add forum topic creation implementation here
        });
    }

    // Progress tracking
    const progressStats = document.querySelectorAll('.stat-value');
    if (progressStats) {
        // Animate progress numbers
        progressStats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50; // Adjust speed as needed
            const updateStat = () => {
                if (current < target) {
                    current += increment;
                    stat.textContent = Math.round(current);
                    requestAnimationFrame(updateStat);
                } else {
                    stat.textContent = target;
                }
            };
            updateStat();
        });
    }

    // Mobile navigation toggle
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth <= 768) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        navbar.insertBefore(menuToggle, navLinks);
        
        menuToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Video player functionality
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        const iframe = videoContainer.querySelector('iframe');
        if (iframe) {
            // Add video player controls or interactions here
        }
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

    // Form validation for contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;

            if (name && email && message) {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Code snippet syntax highlighting
    const codeSnippets = document.querySelectorAll('.code-snippet pre code');
    codeSnippets.forEach(snippet => {
        // Add syntax highlighting here if needed
    });

    // Interactive module cards
    modules.forEach(module => {
        module.addEventListener('click', function() {
            // Add module expansion/collapse functionality here
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