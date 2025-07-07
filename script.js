 // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="ri-close-line"></i>' 
                : '<i class="ri-menu-line"></i>';
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="ri-menu-line"></i>';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Dark mode toggle
        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Change icon based on mode
            if (document.body.classList.contains('dark-mode')) {
                themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
            } else {
                themeToggle.innerHTML = '<i class="ri-contrast-2-line"></i>';
            }
            
            // Save preference to localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('darkMode', isDarkMode);
        });

        // Check for saved user preference
        if (localStorage.getItem('darkMode') === 'true') {
            document.body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="ri-sun-line"></i>';
        }








        



// Initialize floating labels
document.querySelectorAll('.form-group.floating input, .form-group.floating textarea').forEach(input => {
    input.addEventListener('input', updateLabel);
    input.addEventListener('focus', updateLabel);
    input.addEventListener('blur', updateLabel);
    
    function updateLabel() {
        const label = this.nextElementSibling;
        if (this.value || document.activeElement === this) {
            label.style.top = '-10px';
            label.style.fontSize = '0.8rem';
            label.style.background = 'rgba(255, 255, 255, 0.9)';
            label.style.color = 'var(--primary-color)';
        } else {
            label.style.top = '15px';
            label.style.fontSize = '1rem';
            label.style.background = 'transparent';
            label.style.color = 'var(--text-light)';
        }
    }
});














