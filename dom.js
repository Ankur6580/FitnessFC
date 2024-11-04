const datePicker = document.getElementById("date-picker");
let today = new Date().toISOString().split("T")[0];
datePicker.value = today;

const tabSwitches = document.querySelectorAll(".tab-switch > .switch")

tabSwitches.forEach((tabSwitch) => {
  tabSwitch.addEventListener("click", () => {
    tabSwitches.forEach((e) => e.classList.remove("active"));
    tabSwitch.classList.add("active");
  });
});


const closeBtn = document.querySelector("button.close")
const menu = document.querySelector(".input-group")
const user = document.querySelector("div.user")
const overlay = document.querySelector(".black-overlay")

let isSmallScreen = window.matchMedia("(max-width: 40.75em)").matches;

const toggleMenu = () => {
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    menu.style.opacity = 0;
    menu.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
    overlay.classList.remove("active");
  } else {
    menu.style.maxHeight = "300px";
    menu.style.opacity = 1;
    menu.style.pointerEvents = "auto";
    document.body.style.overflow = "hidden";
    overlay.classList.add("active");
  }
};

if (isSmallScreen) {
  user.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
}