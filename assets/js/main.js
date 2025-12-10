
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});


window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });

    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(255, 182, 193, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(255, 182, 193, 0.15)';
    }
});

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


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            
            // Animate progress bars when visible
            if (entry.target.classList.contains('language-item')) {
                const progress = entry.target.querySelector('.progress');
                if (progress) {
                    const width = progress.style.width;
                    progress.style.width = '0';
                    setTimeout(() => {
                        progress.style.width = width;
                    }, 100);
                }
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => observer.observe(item));

    // Animate experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => observer.observe(card));

    // Animate language progress bars
    const languageItems = document.querySelectorAll('.language-item');
    languageItems.forEach(item => observer.observe(item));

    // Animate skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            setTimeout(() => {
                tag.style.transition = 'all 0.5s ease';
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
});

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Hide scroll indicator after scrolling
window.addEventListener('scroll', () => {
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    }
});

const heroTitle = document.querySelector('.hero-text h2');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    // Start typing effect after page load
    setTimeout(typeWriter, 500);
}

function printResume() {
    window.print();
}

function animateCounter(element, target, duration) {
    let current = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}


window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});


window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const scrolled = window.pageYOffset;
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});