const animatedIcon = document.querySelector(".animated-icon");
const navbarToggler = document.querySelector("#main-nav .navbar-toggler");

navbarToggler.addEventListener('click', (e) => {
    
        animatedIcon.classList.toggle("open");
        
    });
                        