window.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('.header'),
          html = document.documentElement;

    window.addEventListener('scroll', function() {
        if(html.scrollTop === 0) {
            header.classList.remove('fixed');
        } else {
            header.classList.add('fixed');
        }
    });
});