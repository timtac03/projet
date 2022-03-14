// les helpers
function $(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
}

function $$(selector, el) {
  if (!el) {
    el = document;
  }
  return Array.prototype.slice.call(el.querySelectorAll(selector));
}

window.addEventListener("DOMContentLoaded", function () {
  $(".header__navBar svg").addEventListener("click", function () {
    $("#nav__links").classList.remove("header__navLinks--Close");
    $("#nav__links").classList.add("header__navLinks--Open");
  });

  $("#nav__links svg").addEventListener("click", function () {
    $("#nav__links").classList.add("header__navLinks--Close");
    $("#nav__links").classList.remove("header__navLinks--Open");
  });

  window.addEventListener("scroll", function () {
    $$(".main__articleUnderline").forEach((h2) => {
      let targetTop = h2.offsetTop;
      windowHeight = document.documentElement.clientHeight;
      if (window.pageYOffset + windowHeight >= targetTop) {
        h2.classList.add("main__articleUnderline2");
        if (screen.width >= 700) {
          $(".main__articleTablet > h2").classList.remove(
            "main__articleUnderline--center"
          );
        }
      }
    });
  });
});
