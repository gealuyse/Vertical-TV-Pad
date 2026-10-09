/* Shared navigation. Loaded with defer before the application. */
(() => {
  const markup = `<nav class="navigation" aria-label="เมนูหลัก">
    <button class="interactive navigation-button" type="button" data-action="go-back" aria-label="ย้อนกลับ">
      <span class="navigation-button__icon"><img src="assets/images/navigation-back-icon-welcome.svg" alt="" draggable="false" class="media-layer"></span>
      <span class="navigation-button__label">Back</span>
    </button>
    <div class="navigation__logo"><img src="assets/images/ais-navigation-logo-welcome.svg" alt="AIS" draggable="false" class="media-layer"></div>
    <a class="interactive navigation-button" href="index.html#home" data-action="go-home" aria-label="กลับหน้าแรก">
      <span class="navigation-button__icon"><img src="assets/images/navigation-home-icon-entertainment.svg" alt="" draggable="false" class="media-layer"></span>
      <span class="navigation-button__label">Home</span>
    </a>
  </nav>`;
  document.querySelectorAll('[data-navbar]').forEach(root => { root.innerHTML = markup; });
})();
