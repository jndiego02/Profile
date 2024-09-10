
window.onscroll = function() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


        function openCVModal() {
            document.getElementById("cvModal").style.display = "block";
        }

        function closeCVModal() {
            document.getElementById("cvModal").style.display = "none";
        }

function toggleBurgerMenu() {
    var menu = document.getElementById("burgerMenu");
    menu.classList.toggle("show");
}


// Open the modal and display the clicked image
function openModal(imageSrc) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Close the modal
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}


// JavaScript: script.js
document.addEventListener('DOMContentLoaded', function () {
    const textArray = ["7+ years experience", "Available Full-time (40 hrs/wk)", "Contact Me!"];
    const typingSpeed = 50; // Speed in milliseconds for typing each character
    const erasingSpeed = 50; // Speed in milliseconds for erasing each character
    const delayBetweenPhrases = 1500; // Delay between current phrase and next phrase in milliseconds

    let textIndex = 0;
    let charIndex = 0;
    const typedTextSpan = document.getElementById('typed-text');
    const cursorSpan = document.querySelector('.cursor');

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
            textIndex++;
            if (textIndex >= textArray.length) textIndex = 0;
            setTimeout(type, typingSpeed + 1100);
        }
    }

    // Initial call to start typing
    setTimeout(type, delayBetweenPhrases + 250);
});


// JavaScript: script.js
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode'); // Toggles dark mode for the body

    // Toggle dark mode for specific sections
    const sections = document.querySelectorAll('.header, .hero, .skills, .work-history, .footer, .button, #scrollTopBtn, #cvModal, .modal-content');
    sections.forEach(section => {
        section.classList.toggle('dark-mode');
    });

    // Change the button icon based on the current mode
    const darkModeToggleButton = document.getElementById('darkModeToggle');
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggleButton.textContent = '☀️'; // Sun icon for light mode
    } else {
        darkModeToggleButton.textContent = '🌙'; // Moon icon for dark mode
    }
}


// Disable dark mode when the window is resized to smaller sizes
window.addEventListener('resize', function() {
    if (window.innerWidth < 768) { // 768px threshold for disabling dark mode
        document.body.classList.remove('dark-mode');
        
        // Remove dark mode from specific sections
        const sections = document.querySelectorAll('.header, .hero, .skills, .work-history, .footer, .button, #scrollTopBtn, #cvModal, .modal-content, .burger-menu');
        sections.forEach(section => {
            section.classList.remove('dark-mode');
        });

        // Change the button icon back to moon (default for light mode)
        const darkModeToggleButton = document.getElementById('darkModeToggle');
        const icon = darkModeToggleButton.querySelector('i');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// scrollToTop.js
window.addEventListener('load', function() {
    // Replace '#header' with the selector for your header element
    const overview = document.querySelector('#overview');
    if (overview) {
        overview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
