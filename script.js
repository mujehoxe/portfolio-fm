document.getElementById("burgerIcon").addEventListener("click", function () {
  document.getElementById("navList").classList.toggle("hidden");
  document.getElementById("closeNav").classList.toggle("hidden");
  document.getElementById("openNav").classList.toggle("hidden");
  document.getElementById("contactList").classList.toggle("hidden");
  document.getElementsByTagName("main")[0].classList.toggle("hidden");
  document.getElementsByTagName("nav")[0].classList.toggle("h-screen");
});
