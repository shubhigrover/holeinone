document.getElementById('menu-icon').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'flex';
    } else {
        navMenu.style.display = 'none';
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
document.addEventListener('DOMContentLoaded', function() {
    // Book with Us button
    document.getElementById('book-btn').addEventListener('click', function(event) {
        event.preventDefault();  // Prevents default link behavior
        openEmailDraft('holeinone@gmail.com');
    });

    // Subscribe button
    document.querySelector('.subscribe-btn').addEventListener('click', function(event) {
        event.preventDefault();  // Prevents default link behavior
        openEmailDraft('holeinone@gmail.com');
    });

    // Gmail icon
    document.getElementById('gmail-icon').addEventListener('click', function(event) {
        event.preventDefault();  // Prevents default link behavior
        openEmailDraft('holeinone@gmail.com');
    });

    function openEmailDraft(email) {
        window.location.href = `mailto:${email}`;
    }
});



