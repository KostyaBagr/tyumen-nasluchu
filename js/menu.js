var knopka = document.querySelector(".nav-toggle");
var menu = document.querySelector(".site-nav");

if (knopka && menu) {
  knopka.onclick = function () {
    document.body.classList.toggle("nav-open");
    if (document.body.classList.contains("nav-open")) {
      knopka.setAttribute("aria-expanded", "true");
    } else {
      knopka.setAttribute("aria-expanded", "false");
    }
  };

  var ssylki = menu.querySelectorAll("a");
  for (var i = 0; i < ssylki.length; i++) {
    ssylki[i].onclick = function () {
      document.body.classList.remove("nav-open");
      knopka.setAttribute("aria-expanded", "false");
    };
  }
}
