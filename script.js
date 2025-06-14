// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

// Initialize all portfolio functionality
function initializePortfolio() {
    setupSmoothScrolling();
    setupNavbarScrollEffect();
    setupIntersectionObserver();
    setupFloatingElements();
    setupProjectCardInteractions();
    setupParallaxEffect();
    setupTypingEffect();
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
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
}

// Navbar scroll effect
function setupNavbarScrollEffect() {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.borderBottom = '1px solid rgba(0, 212, 255, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.borderBottom = 'none';
        }
    });
}

// Intersection Observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideInUp 0.8s ease-out forwards';
                entry.target.style.opacity = '1';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.skill-card, .project-card, .section h2').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// Dynamic floating elements
function setupFloatingElements() {
    function createFloatingElement() {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.style.left = Math.random() * 100 + '%';
        element.style.animationDelay = Math.random() * 8 + 's';
        element.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        const icons = ['🤖', '🐍', '⚙️', '🔧', '💻', '🚀', '🔋', '📡', '⚡', '🎯'];
        element.textContent = icons[Math.floor(Math.random() * icons.length)];
        
        const floatingContainer = document.querySelector('.floating-elements');
        if (floatingContainer) {
            floatingContainer.appendChild(element);
            
            setTimeout(() => {
                if (element.parentNode) {
                    element.remove();
                }
            }, 8000);
        }
    }

    // Create floating elements periodically
    setInterval(createFloatingElement, 3000);
    
    // Create initial elements
    for (let i = 0; i < 3; i++) {
        setTimeout(createFloatingElement, i * 1000);
    }
}

// Interactive project cards
function setupProjectCardInteractions() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
        });

        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02) rotateX(5deg)';
            }, 150);
        });
    });
}

// Parallax effect for hero background
function setupParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroBg = document.querySelector('.hero-bg');
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        // Parallax for floating elements
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            const speed = 0.1 + (index % 3) * 0.05;
            element.style.transform += ` translateY(${scrolled * speed}px)`;
        });
    });
}

// Typing effect for hero title
function setupTypingEffect() {
    function typeWriter(element, text, speed = 100) {
        if (!element) return;
        
        let i = 0;
        element.innerHTML = '';
        element.style.borderRight = '2px solid #00d4ff';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Remove cursor after typing is complete
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
            }
        }
        type();
    }

    // Initialize typing effect with a delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            typeWriter(heroTitle, 'Your Name', 150);
        }
    }, 500);
}

// Skill card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add pulse effect to icon
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.animation = 'pulse 0.6s ease-in-out';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.skill-icon');
            if (icon) {
                icon.style.animation = '';
            }
        });
    });
});

// Add pulse animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Contact form interactions (if you add a form later)
function setupContactForm() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Add click animation
            this.style.transform = 'translateY(-3px) scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-3px) scale(1)';
            }, 150);
        });
    });
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', setupContactForm);

// Scroll to top functionality
function addScrollToTop() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #00d4ff, #7c3aed);
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollButton.style.opacity = '1';
            scrollButton.style.transform = 'translateY(0)';
        } else {
            scrollButton.style.opacity = '0';
            scrollButton.style.transform = 'translateY(20px)';
        }
    });

    scrollButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    setupNavbarScrollEffect();
    setupParallaxEffect();
}, 16);

window.addEventListener('scroll', throttledScrollHandler);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
