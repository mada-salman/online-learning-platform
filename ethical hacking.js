document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactive features
    initSmoothScrolling();
    initModuleProgress();
    initPracticeButtons();
    initForumFeatures();
    initProgressAnimations();
    initMobileNav();
    initCertificateEffects();
    initRoleCards();
});

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Module progress tracking
function initModuleProgress() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(bar => {
        const progress = Math.random() * 100;
        setTimeout(() => {
            bar.style.width = `${progress}%`;
        }, 500);
    });
}

// Practice section button handlers
function initPracticeButtons() {
    // CTF Challenges
    document.querySelector('.ctf-btn').addEventListener('click', () => {
        alert('Starting new CTF challenge...\nDifficulty: Advanced\nCategory: Web Exploitation');
    });

    // Lab Exercises
    document.querySelector('.lab-btn').addEventListener('click', () => {
        alert('Launching virtual lab environment...\nScenario: Network Penetration Testing');
    });

    // Security Tools
    document.querySelector('.tools-btn').addEventListener('click', () => {
        alert('Loading security tools suite...\nTools available: Wireshark, Metasploit, Burp Suite');
    });

    // Scenarios
    document.querySelector('.scenario-btn').addEventListener('click', () => {
        alert('Loading real-world scenario...\nMission: Secure a compromised system');
    });
}

// Forum functionality
function initForumFeatures() {
    const newTopicBtn = document.querySelector('.new-topic-btn');
    if (newTopicBtn) {
        newTopicBtn.addEventListener('click', () => {
            alert('Create a new discussion topic about security findings or techniques.');
        });
    }
}

// Progress tracking animations
function initProgressAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
            }
        });
    });

    const certSection = document.querySelector('.certification');
    if (certSection) {
        observer.observe(certSection);
    }
}

function animateNumbers() {
    document.querySelectorAll('.number').forEach(num => {
        const target = parseInt(num.textContent);
        let current = 0;
        const increment = target / 50;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                num.textContent = target;
                clearInterval(timer);
            } else {
                num.textContent = Math.round(current);
            }
        }, 20);
    });
}

// Mobile navigation
function initMobileNav() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.classList.add('mobile-menu-btn');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    
    if (window.innerWidth <= 768) {
        nav.insertBefore(mobileMenuBtn, navLinks);
        navLinks.style.display = 'none';
    }

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
            if (nav.contains(mobileMenuBtn)) {
                nav.removeChild(mobileMenuBtn);
            }
        } else {
            if (!nav.contains(mobileMenuBtn)) {
                nav.insertBefore(mobileMenuBtn, navLinks);
            }
            navLinks.style.display = 'none';
        }
    });
}

// Certificate card effects
function initCertificateEffects() {
    const certCard = document.querySelector('.cert-card');
    if (certCard) {
        certCard.addEventListener('mouseenter', () => {
            certCard.style.transform = 'scale(1.05)';
            certCard.style.transition = 'transform 0.3s ease';
        });

        certCard.addEventListener('mouseleave', () => {
            certCard.style.transform = 'scale(1)';
        });
    }
}

// Job role card effects
function initRoleCards() {
    document.querySelectorAll('.role-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Security tool simulation
function simulateToolExecution(toolName) {
    const tools = {
        'wireshark': 'Capturing network traffic...',
        'metasploit': 'Scanning for vulnerabilities...',
        'burpsuite': 'Analyzing web traffic...',
        'nmap': 'Port scanning target...'
    };

    return new Promise((resolve) => {
        const message = tools[toolName.toLowerCase()] || 'Running security tool...';
        console.log(message);
        setTimeout(resolve, 2000);
    });
}

// Lab environment setup
function setupLabEnvironment() {
    return {
        startVM: () => console.log('Starting virtual machine...'),
        configureNetwork: () => console.log('Configuring isolated network...'),
        loadScenario: (scenario) => console.log(`Loading scenario: ${scenario}...`),
        resetEnvironment: () => console.log('Resetting lab environment...')
    };
}

// CTF challenge system
class CTFChallenge {
    constructor(name, difficulty, category, points) {
        this.name = name;
        this.difficulty = difficulty;
        this.category = category;
        this.points = points;
        this.solved = false;
    }

    start() {
        console.log(`Starting challenge: ${this.name}`);
        console.log(`Difficulty: ${this.difficulty}`);
        console.log(`Category: ${this.category}`);
        console.log(`Points: ${this.points}`);
    }

    solve() {
        this.solved = true;
        console.log(`Challenge completed! Earned ${this.points} points`);
    }
}

// Initialize tooltips for security tools
document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = e.target.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = e.target.getBoundingClientRect();
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        tooltip.style.left = `${rect.left + (rect.width - tooltip.offsetWidth) / 2}px`;
    });

    element.addEventListener('mouseleave', () => {
        document.querySelector('.tooltip')?.remove();
    });
}); 