const hamberger = document.querySelector(".Hamberger");
const navMenu = document.querySelector(".nav-menu");
const navItem= document.querySelectorAll(".nav-item");


hamberger.addEventListener("click", () => {
  hamberger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach(n=> n.addEventListener("click", ()=>{
 hamberger.classList.remove("active");
  navMenu.classList.remove("active");
}))

