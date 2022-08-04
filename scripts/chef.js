let chefPhoto = "./assets/images/chef/phoenix-satcheup.jpg";
let elChefPhoto = document.getElementById("chefPhoto");

elChefPhoto.src = chefPhoto;

function clickChef(el) {
  // const otherEl = document.getElementsByClassName("cs--selector");

  if (!el.classList.contains("active")) {
    const otherEl = document.querySelectorAll(".cs--selector");
    console.log({ otherEl });
    if (otherEl.forEach((el) => el.classList.remove("active")));
    el.classList.add("active");
    elChefPhoto.src = chefPhoto;
  }
}

function clickChef1(el) {
  chefPhoto = "./assets/images/chef/phoenix-satcheup.jpg";
  clickChef(el);
}

function clickChef2(el) {
  chefPhoto = "./assets/images/chef/renatta-moeloek.jpg";
  clickChef(el);
}
