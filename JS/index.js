const header = document.getElementById('main-header');
let scroll_length = 0;
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > scroll_length) {
        scroll_length = document.documentElement.scrollTop;
        header.style.transform = 'translateY(-100%)'
    }
    else {
        scroll_length = document.documentElement.scrollTop;
        header.style.transform = 'translateY(0)'
    }
})
