window.addEventListener('scroll', function() {
    const navbar = document.getElementById('minav');
    navbar.classList.toggle('scroll', window.scrollY > 50);
});

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});