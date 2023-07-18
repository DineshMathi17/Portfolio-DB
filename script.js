const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav_toggle", "nav_menu");

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll(".nav_link");
navLink.forEach((n) => n.classList.remove("active"));

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));
// NAME Style
function type() {
  let name1 = "M Dinesh Babu";
  let namearr = name1.split("");

  function looping() {
    if (namearr.length > 0) {
      let n = namearr.shift();
      document.querySelector("#heading--main").innerHTML += n;
    } else {
      //deleting();
      return false;
    }
    setTimeout(looping, 900);
  }

  looping();
}

type();






 
