function restoCardClick(el) {
  const otherEl = document.querySelectorAll(".resto-card.featured");
  if (otherEl)
    otherEl.forEach((el) => {
      if (el.classList.contains("lean")) return false;
      return el.classList.add("lean");
    });
  el.classList.remove("lean");
}
