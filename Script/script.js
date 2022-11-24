;(function(){
    "use strict";

    const navbarUl = document.getElementsByClassName("navbar_ul")[0]
    const mobileBtn = document.getElementById("mobile-menu-btn")
    const toTopBtn = document.getElementById("toTopBtn");
    
    toTopBtn.addEventListener("click", scrollTotop)
    window.addEventListener("scroll", displaytoTopBtn)
    mobileBtn.addEventListener('click', toggleMobileMenu)


    function displaytoTopBtn(){
        if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
            toTopBtn.style.display = "block"
        } else{
            toTopBtn.style.display = "none"
        }
    }

    function scrollTotop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    function toggleMobileMenu() {
        navbarUl.classList.toggle("activeMobile")
    }
})()