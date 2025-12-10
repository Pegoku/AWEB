$(window).on("scroll", function () {
  if ($(window).width() <= 896) {
    // console.log($(window).width());
    var scroll = $(window).scrollTop();
    var progress = Math.min(scroll / 90, 1);
    var headerXPosition = Math.round(
      (1 - (1 - progress) * (1 - progress)) * 90
    ); // 90(1-(1-x)**2)
    console.log(headerXPosition);
    $(".actionMainDiv div").css({
      transform: "translateX(" + headerXPosition + "px)",
      width: "calc(100% - " + headerXPosition + "px)",
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menuButton");
  const menuClose = document.getElementById("menuClose");
  const menu = document.querySelector("menu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});