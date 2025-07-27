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

    // Cloud Lab functionality
    document.querySelectorAll('.lab-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Launching cloud lab environment. Get ready to work with cloud services!');
        });
    });

    // Infrastructure Task functionality
    document.querySelectorAll('.task-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Starting infrastructure deployment task. Time to build cloud architecture!');
        });
    });

    // Security Exercise functionality
    document.querySelectorAll('.security-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Beginning cloud security exercise. Protect your infrastructure!');
        });
    });

    // Cost Optimization functionality
    document.querySelectorAll('.optimization-btn').forEach(button => {
        button.addEventListener('click', () => {
            alert('Starting cost optimization analysis. Let\'s make your cloud infrastructure efficient!');
        });
    });

    // Forum new topic functionality
    document.querySelector('.new-topic-btn').addEventListener('click', () => {
        alert('Create a new discussion topic about cloud computing');
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

    // Add cloud service status indicator
    const createServiceStatus = () => {
        const statusDiv = document.createElement('div');
        statusDiv.classList.add('service-status');
        statusDiv.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #00bcd4;
            color: white;
            padding: 10px 20px;
            border-radius: 25px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            display: flex;
            align-items: center;
            gap: 10px;
        `;

        const services = ['AWS', 'Azure', 'GCP'];
        services.forEach(service => {
            const indicator = document.createElement('div');
            indicator.style.cssText = `
                display: flex;
                align-items: center;
                gap: 5px;
            `;
            const dot = document.createElement('span');
            dot.style.cssText = `
                width: 8px;
                height: 8px;
                background: #00ff00;
                border-radius: 50%;
                display: inline-block;
            `;
            indicator.innerHTML = `${service} `;
            indicator.appendChild(dot);
            statusDiv.appendChild(indicator);
        });

        document.body.appendChild(statusDiv);

        // Simulate service status changes
        setInterval(() => {
            const dots = statusDiv.querySelectorAll('span');
            dots.forEach(dot => {
                if (Math.random() < 0.1) {
                    dot.style.background = '#ff0000';
                    setTimeout(() => {
                        dot.style.background = '#00ff00';
                    }, 2000);
                }
            });
        }, 5000);
    };

    createServiceStatus();
}); 