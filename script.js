// script.js

// Toggle visibility of the scroll-to-top button based on scroll position
function handleScroll() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Scroll to the top of the page smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open and close CV modal
function openCVModal() {
    document.getElementById("cvModal").style.display = "block";
}

function closeCVModal() {
    document.getElementById("cvModal").style.display = "none";
}

// Toggle the visibility of the burger menu
function toggleBurgerMenu() {
    const menu = document.getElementById("burgerMenu");
    menu.classList.toggle("show");
}

// Open and close image modal with dynamic content
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Typing effect for text
document.addEventListener('DOMContentLoaded', function () {
    const textArray = ["7+ years experience", "Available Full-time (40 hrs/wk)", "Contact Me!"];
    const typingSpeed = 50;
    const erasingSpeed = 50;
    const delayBetweenPhrases = 1500;

    let textIndex = 0;
    let charIndex = 0;
    const typedTextSpan = document.getElementById('typed-text');

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenPhrases);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    setTimeout(type, delayBetweenPhrases + 250);
});

// Toggle dark mode and adjust UI accordingly
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const sections = document.querySelectorAll('.header, .hero, .skills, .work-history, .footer, .button, #scrollTopBtn, #cvModal, .modal-content');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });

    const darkModeToggleButton = document.getElementById('darkModeToggle');
    darkModeToggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// Handle dark mode toggle and resize events
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        document.body.classList.remove('dark-mode');
        const sections = document.querySelectorAll('.header, .hero, .skills, .work-history, .footer, .button, #scrollTopBtn, #cvModal, .modal-content, .burger-menu');
        sections.forEach(section => {
            section.classList.remove('dark-mode');
        });

        const darkModeToggleButton = document.getElementById('darkModeToggle');
        darkModeToggleButton.textContent = '🌙'; // Default to moon icon for light mode
    }
});

// Show or hide the scroll-to-top button based on scroll position and screen size
function updateScrollButtonVisibility() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (window.innerWidth >= 768) {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    } else {
        scrollTopBtn.style.display = "none"; // Always hide on smaller screens
    }
}

// Initial setup and event listeners
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', updateScrollButtonVisibility);
    window.addEventListener('resize', updateScrollButtonVisibility);
    updateScrollButtonVisibility(); // Initial call to set the correct button state
});

// Scroll to the overview section on page load
window.addEventListener('load', function() {
    const overview = document.querySelector('#overview');
    if (overview) {
        overview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
