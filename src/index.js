import "./assets/scss/main.scss";
import * as slider from "./assets/js/slider.js";
require("./index.pug");


const toggleIcon = document.getElementById("toggle-icon");
const overlayDiv = document.getElementById("overlay");
const nav = document.getElementById("menu");
const body = document.getElementsByTagName("body")[0];
const faqClickArea = document.querySelectorAll(".faq-container");
const menuItems = document.querySelectorAll(".menu-a[href^='#']");
const ctaItem = document.querySelector("#cta");
const forms = document.querySelectorAll(".jsForm");
// const blockPage = document.getElementById('blockPage');

// const preloader = document.querySelector(".center-loader");
// const form = document.getElementById("form");
// const nome = document.getElementById("nome");
// const contato = document.getElementById("contato");
// const mensagem = document.getElementById("mensagem");
// const button = document.getElementById("button-contact");
// const blockPage = document.getElementById("blockpage");
// const checkbox = document.getElementById("checkbox");

if (slider.slider) {
  slider.carrosselRight.addEventListener("click", (e) => {
    slider.sliderChange(true);
  });

  slider.carrosselLeft.addEventListener("click", (e) => {
    slider.sliderChange(false);
  });
}

if (slider.slider2) {
  slider.carrosselRight2.addEventListener("click", (e) => {
    slider.sliderChange2(true);
  });

  slider.carrosselLeft2.addEventListener("click", (e) => {
    slider.sliderChange2(false);
  });
}

if (slider.slider3) {
  slider.carrosselRight3.addEventListener("click", (e) => {
    slider.sliderChange3(true);
  });

  slider.carrosselLeft3.addEventListener("click", (e) => {
    slider.sliderChange3(false);
  });
}




window.cta = cta;

menuItems.forEach((element) => {
  element.addEventListener("click", scrolToIdClick);
});

function scrolToIdClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;
  const menuSpace = 115.25;
  window.scroll({
    top: to - menuSpace,
    behavior: "smooth",
  });
}

function cta() {
  const element = ctaItem;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;
  const menuSpace = 115.25;
  window.scroll({
    top: to - menuSpace,
    behavior: "smooth",
  });
}

faqClickArea.forEach((element) => {
  element.addEventListener("click", (e) => {
    element.parentElement.classList.toggle("active");
  });
});

function closeMenu() {
  nav.classList.remove("active");
  overlayDiv.style.visibility = "hidden";
  body.style.overflow = "visible";
  toggleIcon.setAttribute("aria-expanded", "false");
  toggleIcon.setAttribute("aria-label", "Abrir menu");
}

toggleIcon.addEventListener("click", function (e) {
  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    toggleIcon.setAttribute("aria-expanded", "true");
    toggleIcon.setAttribute("aria-label", "Fechar menu");
    overlayDiv.style.visibility = "visible";
    nav.classList.add("active");
    body.style.overflow = "hidden";
    e.currentTarget.setAttribute("aria-expanded", "true");
    toggleIcon.setAttribute("aria-label", "Fechar menu");
  }
});

overlayDiv.addEventListener("click", function (e) {
  closeMenu();

  dropLink.classList.remove("active");
  dropLink.setAttribute("aria-expanded", "false");
  dropLink.setAttribute("aria-label", "Abrir submenu");
  dropLink.nextElementSibling.style.marginTop = "0rem";

  dropLinkFerramenta.classList.remove("active-ferramentas");
  dropLinkFerramenta.nextElementSibling.style.marginTop = "0rem";
  dropLinkFerramenta.setAttribute("aria-expanded", "false");
  dropLinkFerramenta.setAttribute("aria-label", "Abrir submenu");
});

forms.forEach((element) => {
  element.addEventListener("submit", (event) => {
    event.preventDefault();
    var inputs = element.querySelectorAll(":scope > * > * > *");
    var btn = element.querySelectorAll(":scope > *");

    var nome = inputs[1];
    var contato = inputs[3];
    var checkbox = inputs[4];
    var button = btn[2];

    if (nome.value == "" || contato.value == "" || checkbox.checked == false) {
      alert("Preencha todos os campos desse formulário para continuar");
    } else {
      blockPage.style.zIndex = "100";
      button.disabled = true;
      button.innerHTML = "enviando...";
      let ajax = new XMLHttpRequest();

      var params =
        "nome=" +
        nome.value +
        "&contato=" +
        contato.value

      ajax.open("POST", "copy/enviarForm.php");
      ajax.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      ajax.onreadystatechange = function () {
        if (ajax.status === 200 && ajax.readyState === 4) {
          alert(ajax.responseText);
          nome.value = "";
          contato.value = "";
          button.innerHTML = "enviar";
          blockPage.style.zIndex = "-100";
        }
      };

      ajax.send(params);
      button.disabled = false;
    }
  });
});
