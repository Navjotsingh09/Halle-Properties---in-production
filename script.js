// FAQ Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        
        toggle.addEventListener('click', function() {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current FAQ item
            item.classList.toggle('active');
        });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Add active state to navigation on scroll (optional enhancement)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Filter dropdown functionality (placeholder - would need backend integration)
document.querySelectorAll('.filter-dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function() {
        console.log('Filter clicked:', this.querySelector('span').textContent);
        // Add dropdown menu functionality here
    });
});

// Search button functionality (placeholder - would need backend integration)
const searchButton = document.querySelector('.search-button');
if (searchButton) {
    searchButton.addEventListener('click', function() {
        console.log('Search initiated');
        // Add search functionality here
        // Collect filter values and perform search
    });
}

// View More Properties button
const viewMoreBtn = document.querySelector('.view-more-btn');
if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', function() {
        console.log('View more properties clicked');
        // Navigate to properties page or load more properties
        window.location.href = '#properties';
    });
}

// CTA Button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        console.log('Instant valuation requested');
        // Navigate to valuation page or open modal
    });
}

// Blog Read More buttons
document.querySelectorAll('.blog-read-more').forEach(button => {
    button.addEventListener('click', function() {
        console.log('Read more clicked');
        // Navigate to blog post or open modal
    });
});

// Favorite button functionality
document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('favorited');
        console.log('Property favorited/unfavorited');
        // Add to favorites functionality
    });
});

// Book a Valuation button
const navButton = document.querySelector('.nav-button');
if (navButton) {
    navButton.addEventListener('click', function() {
        console.log('Book a valuation clicked');
        // Open booking modal or navigate to booking page
    });
}

// Add smooth fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.property-card, .testimonial-card, .reason-card, .service-item, .blog-card, .blog-card-small').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('Halle Properties website loaded successfully!');
