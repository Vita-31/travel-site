(function() {
    const header = document.querySelector('header');
    console.log(header);
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            header.classList.add("header__scrol");
         }
         else{
            header.classList.remove("header__scrol");
         }
    };
}());


//Burger

(function(){
    const burgerOpen = document.querySelector('.burger');
    const header = document.querySelector('.header__nav');
    const burgerClose = document.querySelector('.close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerOpen.addEventListener('click', () => {
        header.classList.add('header__nav-active');
    });
    burgerClose.addEventListener('click', () => {
        header.classList.remove('header__nav-active');
    });
    if(window.innerWidth <= 767) {
        for(let i=0; i < menuLinks.length; i+=1) {
            menuLinks[i].addEventListener('click', () => {
                header.classList.remove('header__nav-active');
            });
        }
    }
}());


//Scroll

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());