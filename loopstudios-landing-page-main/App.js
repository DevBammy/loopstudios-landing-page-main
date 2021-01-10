const navSlide = () => {
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.navlinks');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

        navSlide();
    