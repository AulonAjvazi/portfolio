// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for Experience section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-content`).classList.add('active');
        });
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Check if there are more than 5 projects
    const projectCards = document.querySelectorAll('.project-card');
    const viewMoreLink = document.getElementById('view-more-link');
    
    if (viewMoreLink && projectCards.length <= 5) {
        viewMoreLink.style.display = 'none';
    }
});
// Certificate Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Certificate data - replace with your actual certificates
    const allCertificates = [
        {
            image: 'assets/certificates/certificate1.jpg',
            title: 'Web Development Fundamentals',
            description: 'Comprehensive course covering HTML, CSS, and JavaScript basics',
            date: 'June 2024'
        },
        {
            image: 'assets/certificates/certificate2.jpg',
            title: 'Frontend Development Mastery',
            description: 'Advanced techniques in responsive design and modern JavaScript frameworks',
            date: 'August 2024'
        },
        {
            image: 'assets/certificates/certificate3.jpg',
            title: 'UI/UX Design Principles',
            description: 'User interface design fundamentals and user experience best practices',
            date: 'October 2024'
        },
        {
            image: 'assets/certificates/certificate4.jpg',
            title: 'JavaScript Advanced Concepts',
            description: 'Deep dive into JavaScript including closures, prototypes, and async programming',
            date: 'December 2024'
        },
        {
            image: 'assets/certificates/certificate5.jpg',
            title: 'Responsive Web Design',
            description: 'Creating websites that work seamlessly across all devices and screen sizes',
            date: 'February 2025'
        },
        {
            image: 'assets/certificates/certificate6.jpg',
            title: 'Web Accessibility Standards',
            description: 'Implementing WCAG guidelines for creating accessible web applications',
            date: 'April 2025'
        },
        {
            image: 'assets/certificates/certificate7.jpg',
            title: 'React Framework Fundamentals',
            description: 'Building interactive UIs with React components and hooks',
            date: 'May 2025'
        },
        {
            image: 'assets/certificates/certificate8.jpg',
            title: 'Node.js Backend Development',
            description: 'Server-side JavaScript programming with Node.js and Express',
            date: 'June 2025'
        },
        {
            image: 'assets/certificates/certificate9.jpg',
            title: 'Database Design & SQL',
            description: 'Relational database concepts and SQL query optimization',
            date: 'July 2025'
        }
        // Add more certificates as needed
    ];

    // Get DOM elements
    const viewMoreBtn = document.getElementById('view-more-certificates');
    const modal = document.getElementById('certificates-modal');
    const certificatesGrid = modal.querySelector('.certificates-grid');
    const closeButtons = document.querySelectorAll('[data-close-modal]');
    
    // Show/hide view more button based on number of certificates
    if (allCertificates.length <= 6) {
        viewMoreBtn.style.display = 'none';
    }
    
    // Function to create certificate card HTML
    function createCertificateCard(certificate) {
        return `
            <div class="certificate-card">
                <div class="certificate-image">
                    <img src="${certificate.image}" alt="${certificate.title}" width="300" height="200" loading="lazy">
                </div>
                <div class="certificate-details">
                    <h3 class="certificate-title">${certificate.title}</h3>
                    <p class="certificate-description">${certificate.description}</p>
                    <p class="certificate-date">${certificate.date}</p>
                </div>
            </div>
        `;
    }
    
    // Populate modal with all certificates
    function populateModal() {
        certificatesGrid.innerHTML = '';
        allCertificates.forEach(certificate => {
            certificatesGrid.innerHTML += createCertificateCard(certificate);
        });
    }
    
    // Open modal
    function openModal() {
        populateModal();
        modal.setAttribute('open', '');
        modal.setAttribute('aria-hidden', 'false');
        
        // Set focus to the modal container
        setTimeout(() => {
            modal.querySelector('.modal-close').focus();
        }, 100);
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal
    function closeModal() {
        modal.removeAttribute('open');
        modal.setAttribute('aria-hidden', 'true');
        
        // Restore focus to the button that opened the modal
        viewMoreBtn.focus();
        
        // Restore body scrolling
        document.body.style.overflow = '';
    }
    
    // Event listeners
    viewMoreBtn.addEventListener('click', openModal);
    
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.hasAttribute('open')) {
            closeModal();
        }
    });
    
    // Trap focus inside modal when open
    modal.addEventListener('keydown', function(event) {
        if (!modal.hasAttribute('open')) return;
        
        if (event.key === 'Tab') {
            const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });
});
