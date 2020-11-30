"use strict";

(function () {
  $(document).ready(function () {
    $('.md-arrow').on('click', function () {
      $(this).toggleClass('active');
      $('.header .menu').toggleClass('active');
    });
  }); // AOS

  AOS.init({
    // Global settings:
    disable: false,
    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded",
    // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init",
    // class applied after initialization
    animatedClassName: "aos-animate",
    // class applied on animation
    useClassNames: false,
    // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false,
    // disables automatic mutations' detections (advanced)
    debounceDelay: 50,
    // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,
    // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 800,
    // values from 0 to 3000, with step 50ms
    easing: "ease",
    // default easing for AOS animations
    once: true,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation
    // 基本的AOS參數設定值：
    // offset: 120, // 以像素(px)為單位，水平移動
    // delay: 0, //延遲時間，範圍：0~ 3000
    // duration: 400, //動畫時間，範圍：0~ 3000
    // easing: ‘ease’, // 動畫速率效果
    // once: false, // 是否重複觸發動畫
    // mirror: false, // 是否超過滾動範圍時，做移出的動畫效果
    // anchorPlacement: ‘top - bottom’, // 滾動方向觸發動畫，預設由上到下

  });
})();
//# sourceMappingURL=all.js.map
