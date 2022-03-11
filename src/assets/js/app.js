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
    $("#nav__links").classList.remove("header__navClose");
    $("#nav__links").classList.add("header__navOpen");
  });

  $("#nav__links svg").addEventListener("click", function () {
    $("#nav__links").classList.add("header__navClose");
    $("#nav__links").classList.remove("header__navOpen");
  });
});
