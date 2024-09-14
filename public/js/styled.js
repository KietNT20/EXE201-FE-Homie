/* ACTIVE MENU */
function menuActive() {
  const menuLinks = document.querySelectorAll(
    '.header__menu-item .header__link'
  );
  menuLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      menuLinks.forEach((l) => l.classList.remove('--active-menu'));
      this.classList.add('--active-menu');
    });
  });
}

/* PROGRESS SCROLL BAR */
function progressScrollBar() {
  let progress = document.querySelector('.progressbar');
  window.addEventListener('scroll', function () {
    let scrollY = window.scrollY;
    let percentScroll =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progress.style.width = `${percentScroll}%`;
  });
}
window.addEventListener('load', function () {
  progressScrollBar();
  menuActive();
});
