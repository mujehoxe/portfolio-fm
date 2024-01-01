document.getElementById("burgerIcon").addEventListener("click", function () {
  document.getElementById("navList").classList.toggle("hidden");
  document.getElementById("closeNav").classList.toggle("hidden");
  document.getElementById("openNav").classList.toggle("hidden");
  document.getElementById("contactList").classList.toggle("hidden");
  document.getElementsByTagName("main")[0].classList.toggle("hidden");
  document.getElementsByTagName("nav")[0].classList.toggle("h-screen");
});

new Swiper(".whatIDoScroller", {
  loop: true,
  spaceBetween: 20,
  freeMode: true,
  slidesPerView: "auto",
  slidesOffsetBefore: 80,
});

new Swiper(".portfolioSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  slidesOffsetBefore: 80,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="bg-gray-50 w-10 h-[2px] rounded-full ' +
        className +
        '">' +
        "</span>"
      );
    },
  },
});
