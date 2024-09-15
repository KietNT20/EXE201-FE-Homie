/* PROGRESS SCROLL BAR */
function progressScrollBar() {
  let progress = document.querySelector(".progressbar");
  window.addEventListener("scroll", function () {
    let scrollY = window.scrollY;
    let percentScroll =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progress.style.width = `${percentScroll}%`;
  });
}
window.addEventListener("load", function () {
  progressScrollBar();
});
