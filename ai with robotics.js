// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initialize module progress bars with random progress
    document.querySelectorAll('.progress').forEach(progress => {
        const randomProgress = Math.floor(Math.random() * 100);
        progress.style.width = `${randomProgress}%`;
    });

    // Quiz functionality
    document.querySelectorAll('.quiz-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Starting a new quiz session. Get ready to test your knowledge in AI and Robotics!');
        });
    });

    // Coding challenge functionality
    document.querySelectorAll('.challenge-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Loading coding challenge environment. Prepare to solve robotics programming problems!');
        });
    });

    // Project functionality
    document.querySelectorAll('.project-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Initializing new robot project. Get ready to build something amazing!');
        });
    });

    // Simulation functionality
    document.querySelectorAll('.simulation-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Loading robot simulation environment. Prepare to test your algorithms!');
        });
    });

    // Forum new topic functionality
    document.querySelector('.new-topic-btn').addEventListener('click', () => {
        alert('Create a new discussion topic about AI and Robotics');
    });

    // Animate statistics on scroll
    const stats = document.querySelectorAll('.number');
    let animated = false;

    function animateStats() {
        if (animated) return;

        stats.forEach(stat => {
            const target = parseInt(stat.textContent);
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.floor(current);
                }
            }, 40);
        });

        animated = true;
    }

    // Observe certification section for animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
            }
        });
    });

    const certSection = document.querySelector('.certification');
    if (certSection) {
        observer.observe(certSection);
    }

    // Mobile navigation toggle
    const createMobileNav = () => {
        const nav = document.querySelector('nav');
        const mobileBtn = document.createElement('button');
        mobileBtn.classList.add('mobile-nav-btn');
        mobileBtn.innerHTML = '☰';
        mobileBtn.style.cssText = `
            display: none;
            position: absolute;
            right: 1rem;
            top: 1rem;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        `;

        nav.insertBefore(mobileBtn, nav.firstChild);

        mobileBtn.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
        });

        // Add mobile styles
        if (window.innerWidth <= 768) {
            mobileBtn.style.display = 'block';
            document.querySelector('.nav-links').style.display = 'none';
        }
    };

    createMobileNav();

    // Responsive navigation
    window.addEventListener('resize', () => {
        const navLinks = document.querySelector('.nav-links');
        const mobileBtn = document.querySelector('.mobile-nav-btn');
        
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            mobileBtn.style.display = 'none';
        } else {
            navLinks.style.display = 'none';
            mobileBtn.style.display = 'block';
        }
    });

    // Module card interaction
    document.querySelectorAll('.module-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-5px)';
            }, 200);
        });
    });

    // Resource card hover effects
    document.querySelectorAll('.resource-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Certificate hover animation
    const certCard = document.querySelector('.cert-card');
    if (certCard) {
        certCard.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });

        certCard.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Job role card hover effects
    document.querySelectorAll('.role-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation for lab environment
    function showLabLoading() {
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'lab-loading';
        loadingDiv.innerHTML = `
            <div class="loading-spinner"></div>
            <p>Initializing Robot Simulation Environment...</p>
        `;
        document.body.appendChild(loadingDiv);

        setTimeout(() => {
            loadingDiv.remove();
        }, 3000);
    }

    // Add robot status indicator
    function createRobotStatus() {
        const statusDiv = document.createElement('div');
        statusDiv.className = 'robot-status';
        statusDiv.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #2196F3;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 10px;
        `;

        const status = document.createElement('span');
        status.style.cssText = `
            width: 10px;
            height: 10px;
            background: #00ff00;
            border-radius: 50%;
            display: inline-block;
        `;

        statusDiv.innerHTML = 'Robot Status: ';
        statusDiv.appendChild(status);
        document.body.appendChild(statusDiv);

        // Simulate robot status changes
        setInterval(() => {
            const random = Math.random();
            if (random < 0.1) {
                status.style.background = '#ff0000';
                setTimeout(() => {
                    status.style.background = '#00ff00';
                }, 2000);
            }
        }, 5000);
    }

    // Enhanced module progress tracking
    function initModuleProgress() {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach((bar, index) => {
            const progress = Math.random() * 100;
            const moduleCard = bar.closest('.module-card');
            const statusText = document.createElement('div');
            statusText.className = 'progress-status';
            statusText.style.cssText = `
                font-size: 0.8rem;
                color: #666;
                margin-top: 5px;
            `;
            moduleCard.appendChild(statusText);

            setTimeout(() => {
                bar.style.width = `${progress}%`;
                statusText.textContent = `Progress: ${Math.round(progress)}%`;
                
                if (progress >= 100) {
                    statusText.textContent = 'Module Completed!';
                    statusText.style.color = '#4CAF50';
                }
            }, 500 + (index * 200));
        });
    }

    // Add new feature initializations
    createRobotStatus();
    
    // Update lab button click handler
    document.querySelector('.lab-btn').addEventListener('click', () => {
        showLabLoading();
        alert('Launching robot simulation environment...\nScenario: Robot Navigation');
    });
}); 