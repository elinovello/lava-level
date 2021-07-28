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
            document.getElementById("navbar").style.top = "-50px";
        }
         prevScrollpos = currentScrollPos;
    }

});