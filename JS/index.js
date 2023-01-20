//On Scroll header response logic

const header = document.getElementById('main-header');
let scroll_length = 0;
let isNavOpen = false;
window.addEventListener('scroll', () => {
    if (isNavOpen == false) {
        if (document.documentElement.scrollTop > scroll_length) {
            scroll_length = document.documentElement.scrollTop;
            header.style.transform = 'translateY(-100%)'
        }
        else {
            scroll_length = document.documentElement.scrollTop;
            header.style.transform = 'translateY(0)'
        }
    }
})

// Social Club Login Nav Opener

const socialBtn = document.getElementById('Social_Btn');
const socialNav = document.getElementById('social-menu');
socialBtn.addEventListener('click', () => {
    socialNav.classList.toggle('club-nav-show')
})

const mainNavBtn = document.getElementById('main-navBtn');
mainNavBtn.addEventListener('click', () => {
    isNavOpen = (isNavOpen == false)? true  : false
    mainNavBtn.classList.toggle('menu-icon-open');
})