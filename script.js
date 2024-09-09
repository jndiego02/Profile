
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
