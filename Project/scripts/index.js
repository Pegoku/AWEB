$(window).on("scroll", function () {
  if ($(window).width() <= 768) {
    // console.log($(window).width());
    var scroll = $(window).scrollTop();
    var progress = Math.min(scroll / 90, 1);
    var headerXPosition = Math.round(
      (1 - (1 - progress) * (1 - progress)) * 90
    ); // 90(1-(1-x)**2)
    console.log(headerXPosition);
    $(".actionDiv").css({
      transform: "translateX(" + headerXPosition + "px)",
      width: "calc(100% - " + headerXPosition + "px)",
    });
  }
});
