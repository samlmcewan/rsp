// If we are on devices >= large devices, push the skew down below the main nav height 
if (window.matchMedia('(min-device-width: 992px)').matches) {
    let mainNav = document.querySelector('#main-nav .container-fluid');

    let compNav = window.getComputedStyle(mainNav);

    let navH = compNav.getPropertyValue('height');

    let skewtop = document.querySelector('.skew-top');

    let compSkew = window.getComputedStyle(skewtop);


    skewtop.style.setProperty('margin-top', navH);

                }