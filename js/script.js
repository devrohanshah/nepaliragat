modal = document.getElementById("modal-box");
btn = document.getElementById("send-msg");
close = document.getElementById("close");
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}
close.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// redirecting the pages

let homePage = document.getElementById("home-page");
let aboutPage = document.getElementById("about-page");
let coreteamPage = document.getElementById("coreteam-page");
let contactPage = document.getElementById("contact-page");

homePage.onclick = function() {
  location.href = "#home";
}
aboutPage.onclick = function() {
  location.href = "#about";
}
coreteamPage.onclick = function() {
  location.href = "#coreteam";
}
contactPage.onclick = function() {
  location.href = "#contact";
}