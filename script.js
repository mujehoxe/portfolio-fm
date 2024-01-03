document.getElementById("burgerIcon").addEventListener("click", function () {
  document.getElementById("navList").classList.toggle("hidden");
  document.getElementById("closeNav").classList.toggle("hidden");
  document.getElementById("openNav").classList.toggle("hidden");
  document.getElementById("contactList").classList.toggle("hidden");
  document.getElementsByTagName("main")[0].classList.toggle("hidden");
  document.getElementsByTagName("footer")[0].classList.toggle("hidden");
  document.getElementsByTagName("nav")[0].classList.toggle("h-screen");
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var form = document.getElementById("contactForm");
    var formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/8bcfc16e4d9cd7d2813b55decd414d18", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

new Swiper(".whatIDoScroller", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 3000, // Adjust the delay (in milliseconds) between slides
    disableOnInteraction: false, // Set to false to prevent stopping autoplay on user interaction
  },
});

new Swiper(".portfolioSwiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  slidesOffsetBefore: 80,
  autoplay: {
    delay: 3000, // Adjust the delay (in milliseconds) between slides
    disableOnInteraction: false, // Set to false to prevent stopping autoplay on user interaction
  },

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
