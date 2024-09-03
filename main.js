window.addEventListener('mousemove', (event) => {
  document.querySelector(
    '.profile-image-container'
  ).style.background = `linear-gradient(${event.clientY}deg, #34d43a, #f9ca24)`;
});
document.querySelector('.year').textContent = new Date().getFullYear();
const paths = ['path-logo1', 'path-logo2', 'path-logo3', 'path-logo4'];
for (const path of paths) {
  const pathEl = document.querySelector(`.${path}`);

  requestAnimationFrame(() => {
    pathEl.style.strokeDashoffset = 0;
    function HideAndShowLogo() {
      setTimeout(() => {
        pathEl.classList.add(`${path}-reverse`);
        pathEl.style.strokeDashoffset = 1;
        setTimeout(() => {
          pathEl.classList.remove(`${path}-reverse`);
          pathEl.style.strokeDashoffset = 0;
          HideAndShowLogo();
        }, 1400 + 1000); // 消える時間+消えてから表示する時間
      }, 3200 + 10000); // 表示する時間+次の消えるまでの時間
    }
    HideAndShowLogo();
  });
}
