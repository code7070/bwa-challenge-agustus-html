// declare chef photo
let chefPhoto = "./assets/images/chef/phoenix-satcheup.jpg";
let elChefPhoto = document.getElementById("chefPhoto");
let elPhoto = document.getElementById("csChefPhoto");
elChefPhoto.src = chefPhoto;

// declare chef experience
let elExperience = document.getElementById("csChefExperience");
let elExperienceYears = document.getElementById("chefExperience");
let expValue = "12 Years";
elExperienceYears.innerHTML = expValue;

let elWorkAt = document.getElementById("chefWorkAt");

//
// classlist helper function

function addClassList(el, className = "") {
  if (!el) return false;
  return el.classList.add(className);
}

function removeClassList(el, className) {
  if (!el) return false;
  return el.classList.remove(className);
}

function clickChef(el) {
  if (!el.classList.contains("active")) {
    // Check and remove other active selector
    const otherEl = document.querySelectorAll(".cs--selector");
    if (otherEl.forEach((el) => removeClassList(el, "active")));

    // set active to caller selector
    addClassList(el, "active");

    // set animation photo
    addClassList(elPhoto, "animate");
    addClassList(elExperience, "animate");
    addClassList(elWorkAt, "animate");

    // Final action for chef profile
    setTimeout(() => {
      removeClassList(elPhoto, "animate");
      removeClassList(elExperience, "animate");
      removeClassList(elWorkAt, "animate");

      //replace chef photo
      elChefPhoto.src = chefPhoto;

      //replace chef experience
      elExperienceYears.innerHTML = expValue;
    }, 250);
  }
}

// Group for chef selector action value
function clickChef1(el) {
  chefPhoto = "./assets/images/chef/phoenix-satcheup.jpg";
  expValue = "12 Years";
  clickChef(el);
}

function clickChef2(el) {
  chefPhoto = "./assets/images/chef/gaz-oakley.jpg";
  expValue = "4 Years";
  clickChef(el);
}

function clickChef3(el) {
  chefPhoto = "./assets/images/chef/renatta-moeloek.jpg";
  expValue = "7 Years";
  clickChef(el);
}

function clickChef4(el) {
  chefPhoto = "./assets/images/chef/chef-merlin.jpg";
  expValue = "10 Years";
  clickChef(el);
}
