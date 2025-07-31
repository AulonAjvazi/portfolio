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
