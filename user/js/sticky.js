window.onscroll = function() {myFunction()};

var navbar = document.querySelector('.v-header--secondary');

var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("v-sticky")
    } else {
        navbar.classList.remove("v-sticky");
    }
}