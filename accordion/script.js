const items = document.querySelectorAll(".accordion-item");

window.onload = () => {
  const body = items[0].querySelector(".accordion-body");
  items[0].classList.add("active");
  body.style.maxHeight = body.scrollHeight + "px";
};

items.forEach(item => {
  const h = item.querySelector(".accordion-header");
  const b = item.querySelector(".accordion-body");
  const i = item.querySelector(".icon");

  h.onclick = () => {
    item.classList.toggle("active");
    const open = item.classList.contains("active");
    b.style.maxHeight = open ? b.scrollHeight + "px" : null;
    i.textContent = open ? "-" : "+";
  };
});
