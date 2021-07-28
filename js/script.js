document.addEventListener("DOMContentLoaded", function () {

    const burgerMenuBtn = document.querySelector('#burger-menu-button')

    burgerMenuBtn.addEventListener('click', function() {
        document.body.classList.toggle('mobile-menu-active');

    });

    

    var prevScrollpos = window.pageYOffset;
    
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-10vh";
        }
         prevScrollpos = currentScrollPos;
    }

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