const hamburger = document.getElementById('hamburger');
const navlink = document.getElementById('navlink');

hamburger.addEventListener('click', () => {
    navlink.classList.toggle('show');
});
