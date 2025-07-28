document.addEventListener('DOMContentLoaded', function() {
    // Form popup functionality
    const loginBtn = document.querySelector('button[style*="background-color: rgb(255, 121, 121)"]');
    const signupBtn = document.querySelector('button[style*="background-color: rgb(121, 164, 255)"]');
    const loginPopup = document.getElementById('loginFormPopup');
    const signupPopup = document.getElementById('signupFormPopup');
    const closeBtns = document.querySelectorAll('.close-btn');
    const switchToSignup = document.querySelector('.switch-to-signup');
    const switchToLogin = document.querySelector('.switch-to-login');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const courseSections = document.querySelectorAll('#tot section');

    // Define searchable content for each course
    const courseContent = {
        'cyber security': {
            title: 'CYBER SECURITY',
            description: 'Protecting digital assets and information from threats and cyberattacks.',
            keywords: ['cybersecurity', 'security', 'cyber', 'protection', 'hacking', 'network security']
        },
        'web design': {
            title: 'WEB DESIGN',
            description: 'Designing attractive and user-friendly websites with a clear layout.',
            keywords: ['web', 'design', 'website', 'ui', 'ux', 'frontend', 'html', 'css']
        },
        'data science': {
            title: 'DATA SCIENCE',
            description: 'Gaining insights from big data using statistics and machine learning.',
            keywords: ['data', 'science', 'analytics', 'statistics', 'big data', 'analysis']
        },
        'artificial intelligence': {
            title: 'ARTIFICIAL INTELLIGENCE',
            description: 'Developing intelligent systems that mimic human behavior and improve through experience.',
            keywords: ['ai', 'artificial intelligence', 'intelligence', 'smart systems', 'neural networks']
        },
        'ml': {
            title: 'MACHINE LEARNING',
            description: 'Creating algorithms that allow computers to learn from data and improve over time.',
            keywords: ['machine learning', 'ml', 'learning', 'algorithms', 'training', 'models']
        },
        'ai with robitics': {
            title: 'AI WITH ROBITCS',
            description: 'Integrating artificial intelligence into robots to enable autonomous decision-making and actions.',
            keywords: ['robotics', 'ai robotics', 'robot', 'automation', 'autonomous']
        },
        'Block chain': {
            title: 'Blockchain Technology',
            description: 'Enabling secure, decentralized, and tamper-proof transactions with blockchain.',
            keywords: ['blockchain', 'crypto', 'bitcoin', 'decentralized', 'ledger', 'cryptocurrency']
        },
        'cloud computing': {
            title: 'Cloud Computing',
            description: 'Providing online computing services like storage, databases, and software for efficiency.',
            keywords: ['cloud', 'computing', 'aws', 'azure', 'storage', 'serverless']
        },
        'ethical hacking': {
            title: 'Ethical Hacking',
            description: 'Identifying and fixing security flaws by testing systems against cyber threats.',
            keywords: ['hacking', 'ethical', 'penetration testing', 'security testing', 'vulnerability']
        }
    };

    // Show/hide popups
    loginBtn.addEventListener('click', () => {
        loginPopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    signupBtn.addEventListener('click', () => {
        signupPopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close popups
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginPopup.style.display = 'none';
            signupPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Switch between forms
    switchToSignup.addEventListener('click', (e) => {
        e.preventDefault();
        loginPopup.style.display = 'none';
        signupPopup.style.display = 'block';
    });

    switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupPopup.style.display = 'none';
        loginPopup.style.display = 'block';
    });

    // Close popups when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === loginPopup || e.target === signupPopup) {
            loginPopup.style.display = 'none';
            signupPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Search functionality
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            showAllCourses();
            return;
        }

        let found = false;
        courseSections.forEach(section => {
            const sectionId = section.id.toLowerCase();
            const course = courseContent[sectionId];
            
            if (course) {
                const matches = course.keywords.some(keyword => 
                    keyword.toLowerCase().includes(searchTerm)
                ) || course.title.toLowerCase().includes(searchTerm) || 
                course.description.toLowerCase().includes(searchTerm);

                section.style.display = matches ? 'block' : 'none';
                if (matches) found = true;
            }
        });

        if (!found) {
            showNoResultsMessage();
        }
    });

    function showAllCourses() {
        courseSections.forEach(section => {
            section.style.display = 'block';
        });
        removeNoResultsMessage();
    }

    function showNoResultsMessage() {
        removeNoResultsMessage();
        const message = document.createElement('div');
        message.id = 'noResults';
        message.style.textAlign = 'center';
        message.style.padding = '20px';
        message.style.color = '#ff4444';
        message.style.fontSize = '18px';
        message.style.fontWeight = 'bold';
        message.textContent = 'No courses found matching your search.';
        document.getElementById('tot').appendChild(message);
    }

    function removeNoResultsMessage() {
        const message = document.getElementById('noResults');
        if (message) {
            message.remove();
        }
    }

    // Add real-time search as user types
    searchInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            showAllCourses();
        }
    });

    // Password strength checker
    const signupPassword = document.getElementById('signupPassword');
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');

    signupPassword.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        
        if (password.length >= 8) strength += 25;
        if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
        if (password.match(/\d/)) strength += 25;
        if (password.match(/[^a-zA-Z\d]/)) strength += 25;

        strengthBar.style.width = strength + '%';
        
        if (strength < 25) {
            strengthText.textContent = 'Weak';
            strengthBar.style.backgroundColor = '#ff4444';
        } else if (strength < 50) {
            strengthText.textContent = 'Fair';
            strengthBar.style.backgroundColor = '#ffbb33';
        } else if (strength < 75) {
            strengthText.textContent = 'Good';
            strengthBar.style.backgroundColor = '#00C851';
        } else {
            strengthText.textContent = 'Strong';
            strengthBar.style.backgroundColor = '#007E33';
        }
    });

    // Form submission handling
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const contactForm = document.getElementById('contactForm');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        
        // Here you would typically send this to your backend
        console.log('Login attempt:', { email, password });
        alert('Login successful!');
        loginPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const phone = document.getElementById('signupPhone').value;
        const password = document.getElementById('signupPassword').value;
        
        // Here you would typically send this to your backend
        console.log('Signup attempt:', { name, email, phone, password });
        alert('Registration successful!');
        signupPopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send this to your backend
        console.log('Contact form submission:', data);
        alert('Message sent successfully!');
        this.reset();
    });

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

    // Profile popup functionality
    const profileContainer = document.getElementById('profileContainer');
    const profilePopup = document.getElementById('profilePopup');
    const closeBtn = document.querySelector('.close-btn');
    const imageInput = document.getElementById('imageInput');
    const profileImage = document.getElementById('profileImage');
    const defaultProfileIcon = document.getElementById('defaultProfileIcon');
    const changeImageBtn = document.getElementById('changeImageBtn');

    // Show profile popup when clicking the container
    profileContainer.addEventListener('click', showProfilePopup);

    // Close popup when clicking close button
    closeBtn.addEventListener('click', hideProfilePopup);

    // Close popup when clicking outside
    profilePopup.addEventListener('click', function(e) {
        if (e.target === profilePopup) {
            hideProfilePopup();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && profilePopup.style.display === 'block') {
            hideProfilePopup();
        }
    });

    // Handle image upload
    changeImageBtn.addEventListener('click', function() {
        imageInput.click();
    });

    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                profileImage.style.display = 'block';
                defaultProfileIcon.style.display = 'none';
                // Save to localStorage
                localStorage.setItem('profileImage', e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    // Load saved profile image
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profileImage.src = savedImage;
        profileImage.style.display = 'block';
        defaultProfileIcon.style.display = 'none';
    }

    function showProfilePopup() {
        profilePopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hideProfilePopup() {
        profilePopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Add hover effect to profile container
    profileContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    profileContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    // Add hover effect to navigation items
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Light/Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    function setTheme(dark) {
      if (dark) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
      }
    }

    // On load, set theme from localStorage
    window.addEventListener('DOMContentLoaded', () => {
      const savedTheme = localStorage.getItem('theme');
      setTheme(savedTheme === 'dark');
    });

    themeToggle.addEventListener('click', () => {
      const isDark = !document.body.classList.contains('dark-mode');
      setTheme(isDark);
    });
});