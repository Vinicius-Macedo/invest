const breakpoint = 1024;
const toggle = document.getElementById("btn-mobile");
const overlayDiv = document.getElementById("overlay");
const nav = document.getElementById("navbar");
const body = document.getElementsByTagName("body")[0];
const dropitem = document.querySelector(".navlist-li-drop");
const sunIcon = document.getElementById("lightModeIcon");
const moonIcon = document.getElementById("DarkModeIcon");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const themeToggle = document.getElementById("themeToggle");

const iconToggle = () => {
  sunIcon.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");
};

const themeCheck = () => {
  if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    sunIcon.classList.remove("display-none");
    moonIcon.classList.add("display-none");
  }
  else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    sunIcon.classList.add("display-none");
    moonIcon.classList.remove("display-none");
    // iconToggle();
  }
};

const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

themeCheck();

// themeCheck();
themeToggle.addEventListener("click", themeSwitch);

// FUNÇÃO PARA FECHAR O MENU //
function closeMenu() {
  nav.classList.remove("active");
  overlayDiv.style.visibility = "hidden";
  body.style.overflow = "visible";
}

toggle.addEventListener("click", function (e) {
  if (nav.classList.contains("active")) {
    closeMenu();
  } else {
    overlayDiv.style.visibility = "visible";
    nav.classList.add("active");
    body.style.overflow = "hidden";
    e.currentTarget.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
  }
});

window.addEventListener("click", function (e) {
  !nav.contains(e.target) &&
    this.window.innerWidth < breakpoint &&
    nav.classList.contains("active") &&
    closeMenu();
});

///////////////////////////

function scrollValue() {
  var navbar = document.getElementById("navbar");
  var scroll = window.scrollY;
  if (scroll < 100) {
    navbar.style.borderBottom = "2px solid #ffffff";
  } else {
    navbar.style.borderBottom = "2px solid #00a8e1";
  }
}

window.addEventListener("scroll", scrollValue);

///////////////////////////

dropitem.addEventListener("click", function () {
  if (nav.classList.contains("drop")) {
    nav.classList.remove("drop");
  } else {
    nav.classList.add("drop");
  }
});
