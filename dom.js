const tabSwitches = document.querySelectorAll(".tab-switch > .switch")
tabSwitches.forEach((e) => {
  console.log(`class of ${e.innerHTML} is:\n ${e.className}`);
})

tabSwitches.forEach((tabSwitch) => {
  tabSwitch.addEventListener("click", () => {
    tabSwitches.forEach((e) => e.classList.remove("active"));

    tabSwitch.classList.add("active");

    console.clear();

    tabSwitches.forEach((e) => {
      console.log(`class of ${e.innerHTML} is:\n ${e.className}`);
    });
  });
});


const closeBtn = document.querySelector("button.close")
const menu = document.querySelector(".input-group")
const user = document.querySelector("div.user")

let isSmallScreen = window.matchMedia("(max-width: 40.75em)").matches;

const toggleMenu = () => {
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
    menu.style.opacity = 0;
    menu.style.pointerEvents = "none";
    document.body.style.overflow = "auto";
  } else {
    menu.style.maxHeight = "300px";
    menu.style.opacity = 1;
    menu.style.pointerEvents = "auto";
    document.body.style.overflow = "hidden";
  }
};

if (isSmallScreen) {
  user.addEventListener("click", toggleMenu);
  closeBtn.addEventListener("click", toggleMenu);
}