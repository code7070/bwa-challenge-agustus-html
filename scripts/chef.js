let chefPhoto = "./assets/images/chef/phoenix-satcheup.jpg";
let elChefPhoto = document.getElementById("chefPhoto");

elChefPhoto.src = chefPhoto;

function clickChef(el) {
  if (!el.classList.contains("active")) {
    // Check and remove other active selector
    const otherEl = document.querySelectorAll(".cs--selector");
    if (otherEl.forEach((el) => el.classList.remove("active")));

    // set active to caller selector
    el.classList.add("active");

    // set animation photo
    const elPhoto = document.getElementById("csChefPhoto");
    elPhoto.classList.add("animate");
    setTimeout(() => {
      elPhoto.classList.remove("animate");

      //replace chef photo
      elChefPhoto.src = chefPhoto;
    }, 250);
  }
}

function clickChef1(el) {
  chefPhoto = "./assets/images/chef/phoenix-satcheup.jpg";
  clickChef(el);
}

function clickChef2(el) {
  chefPhoto = "./assets/images/chef/gaz-oakley.jpg";
  clickChef(el);
}

function clickChef3(el) {
  chefPhoto = "./assets/images/chef/renatta-moeloek.jpg";
  clickChef(el);
}

function clickChef4(el) {
  chefPhoto = "./assets/images/chef/chef-merlin.jpg";
  clickChef(el);
}
