document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const sections = document.querySelectorAll('.category-section');
    const navItems = document.querySelectorAll('.nav-item');
    const contentScroll = document.querySelector('.content-scroll');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.querySelector('.sidebar-overlay');
    const toggleIcon = mobileMenuToggle.querySelector('i');

    // Mobile Menu Logic
    function toggleMobileMenu() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
        
        if (sidebar.classList.contains('active')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-times');
        } else {
            toggleIcon.classList.remove('fa-times');
            toggleIcon.classList.add('fa-bars');
        }
    }

    function closeMobileMenu() {
        sidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        toggleIcon.classList.remove('fa-times');
        toggleIcon.classList.add('fa-bars');
    }

    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    sidebarOverlay.addEventListener('click', closeMobileMenu);

    // Search Functionality
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        sections.forEach(section => {
            let hasVisibleCards = false;
            const cards = section.querySelectorAll('.card');
            
            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                const desc = card.querySelector('.card-desc').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                    card.style.display = 'flex';
                    hasVisibleCards = true;
                    // Add animation
                    card.style.animation = 'fadeIn 0.5s ease';
                } else {
                    card.style.display = 'none';
                }
            });

            section.style.display = hasVisibleCards ? 'block' : 'none';
        });
    });

    // ScrollSpy Functionality
    function updateActiveNav() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Adjustment for scroll position
            if (contentScroll.scrollTop >= (sectionTop - 150)) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === currentSection) {
                item.classList.add('active');
            }
        });
    }

    contentScroll.addEventListener('scroll', updateActiveNav);

    // Smooth Scroll for Nav Links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Close mobile menu if open
                closeMobileMenu();

                contentScroll.scrollTo({
                    top: targetSection.offsetTop - 30, // Offset for padding
                    behavior: 'smooth'
                });
                
                // Update active state immediately
                navItems.forEach(item => item.classList.remove('active'));
                this.parentElement.classList.add('active');
            }
        });
    });
    
    // Initial call to set active state
    updateActiveNav();
});

// Add keyframes for search animation
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--primary-color) }
}
`;
document.head.appendChild(styleSheet);
