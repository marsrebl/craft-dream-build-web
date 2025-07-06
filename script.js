// Navigation functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav-link')) {
        navMenu.classList.remove('active');
    }
});

// Header scroll effect and floating button
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const floatingButton = document.getElementById('floating-lets-talk');
    const heroSection = document.getElementById('home');
    const heroHeight = heroSection.offsetHeight;
    
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Show floating Let's Talk button after hero section
    if (window.scrollY > heroHeight - 200) {
        floatingButton.classList.add('visible');
    } else {
        floatingButton.classList.remove('visible');
    }
});

// Hero slider functionality
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
    });
    
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Manual slide control
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
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

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);

// Contact form functionality
const contactForm = document.getElementById('contact-form');
const thankYouMessage = document.getElementById('thank-you-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const formData = new FormData(contactForm);
    const purpose = formData.get('purpose');
    const fullName = formData.get('fullName');
    const address = formData.get('address');
    const contactNumber = formData.get('contactNumber');
    
    // Basic validation
    if (!purpose || !fullName || !address || !contactNumber) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Phone number validation
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(contactNumber)) {
        alert('Please enter a valid contact number.');
        return;
    }
    
    // Show thank you message
    contactForm.style.display = 'none';
    thankYouMessage.classList.add('show');
    
    // Reset form after 5 seconds
    setTimeout(() => {
        contactForm.style.display = 'block';
        thankYouMessage.classList.remove('show');
        contactForm.reset();
    }, 5000);
    
    console.log('Form submitted successfully:', Object.fromEntries(formData));
});

// Chatbot functionality
const chatbot = document.getElementById('chatbot');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Make sure chatbot is visible on page load
document.addEventListener('DOMContentLoaded', () => {
    if (chatbot) {
        chatbot.style.display = 'block';
        chatbot.style.visibility = 'visible';
    }
});

if (chatbotToggle && chatbot) {
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.toggle('open');
    });
}

function addMessage(message, isUser = false) {
    if (!chatbotMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
        return 'We offer house construction, land buying/selling, electrician & plumbing services, rental services, house painting, and property management. Which service interests you?';
    } else if (message.includes('construction') || message.includes('build')) {
        return 'We provide complete house construction and engineering services. Our team handles everything from planning to completion. Would you like to get a quote?';
    } else if (message.includes('land') || message.includes('buy') || message.includes('sell')) {
        return 'We assist with land buying and selling with legal support and market analysis. We serve Janakpur, Bardibas, Lalbandi, Hetauda, and Kathmandu areas.';
    } else if (message.includes('rental') || message.includes('rent')) {
        return 'We offer comprehensive rental solutions for both residential and commercial properties. Our team can help you find the perfect rental or manage your property.';
    } else if (message.includes('contact') || message.includes('phone') || message.includes('email')) {
        return 'You can reach us at +977-9800000000 or email us at info@realestatecrafter.com. We\'re here to help!';
    } else if (message.includes('quote') || message.includes('price')) {
        return 'I\'d be happy to help you get a quote! Please fill out our contact form with your project details, and our team will get back to you within 24 hours.';
    } else if (message.includes('area') || message.includes('location')) {
        return 'We provide services in Janakpur, Bardibas, Lalbandi, Hetauda, and Kathmandu. Which area are you interested in?';
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return 'Hello! Welcome to Real Estate Crafters International. How can I assist you today? You can ask about our services, get a quote, or contact information.';
    } else if (message.includes('thank')) {
        return 'You\'re welcome! Is there anything else I can help you with today?';
    } else {
        return 'I\'m here to help! You can ask me about our services (construction, land buying/selling, rentals, etc.), get contact information, or request a quote. What would you like to know?';
    }
}

function sendMessage() {
    if (!chatbotInput) return;
    
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response);
        }, 1000);
    }
}

if (chatbotSend) {
    chatbotSend.addEventListener('click', sendMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add scroll reveal class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll('.service-card, .area-card, .contact-item');
    elementsToReveal.forEach(element => {
        element.classList.add('scroll-reveal');
    });
});

// Service card click functionality
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        const service = card.dataset.service;
        console.log(`Clicked on ${service} service`);
        // You can add navigation to service detail pages here
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            this.classList.add('pulse-animation');
            setTimeout(() => {
                this.classList.remove('pulse-animation');
            }, 1000);
        }
    });
});

// Optimize images loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease';
                
                img.onload = () => {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

console.log('Real Estate Crafters International website loaded successfully!');
