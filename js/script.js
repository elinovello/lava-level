document.addEventListener("DOMContentLoaded", function () {

    // menu hamburguesa
    const burgerMenuBtn = document.querySelector('#burger-menu-button')

    burgerMenuBtn.addEventListener('click', function() {
        document.body.classList.toggle('mobile-menu-active');

    });

    var prevScrollpos = window.pageYOffset;
    const navbarTag = document.getElementById("navbar");
    
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            navbarTag.style.top = "0";
            navbarTag.style.transform = "all 0.3s";
        } else {
            navbarTag.style.top = "-10vh";
            navbarTag.style.transform = "all 0.3s";

        }
         prevScrollpos = currentScrollPos;
    }

    window.addEventListener('scroll', function(){
        const header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 0);
    });

    //slideshow images
    const slideshowImages = document.querySelectorAll(".slideshow")
    const nextImageDelay = 3000;    
    let currentImageCounter = 0; 

    slideshowImages[currentImageCounter].style.opacity = 1;

    setInterval(nextImage, nextImageDelay);

    function nextImage() {
        slideshowImages[currentImageCounter].style.opacity= 0;
        currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;
        slideshowImages[currentImageCounter].style.opacity = 1;
    }

    


});