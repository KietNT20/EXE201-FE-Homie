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

/* SHOW BTN UP AND CHANGE BG */
function showBtnUpAndChangeBg() {
  const header = document.querySelector('.header');
  if (window.scrollY >= header.scrollHeight) {
    header.classList.add('--bg-dark');
  } else {
    header?.classList.remove('--bg-dark');
  }
}

window.addEventListener('load', function () {
  progressScrollBar();
});

window.onscroll = function () {
  showBtnUpAndChangeBg();
};
