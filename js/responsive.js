mobileNav = document.querySelector(".mobile-nav");
allLi = document.querySelectorAll(".navLi");

allLi.forEach((li, index) => {
  li.addEventListener("click" , e =>{
    e.preventDefault(); //preventing from submitting
    mobileNav.querySelector(".activeNavIcon").classList.remove("activeNavIcon");
    mobileNav.querySelector(".inactiveIcon").classList.remove("inactiveIcon");
    li.firstElementChild.firstElementChild.classList.add("inactiveIcon");
    li.firstElementChild.firstElementChild.nextElementSibling.classList.add("activeNavIcon");
    const indicator = document.querySelector(".indicator");
    indicator.style.transform = `translateX(calc(${index * 20}vw))`;
  });
});
