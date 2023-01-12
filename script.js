(() => {
  $(".div")
    .on("click", function (e) {
      e.stopPropagation();
      $(this).addClass("nofade");
      $("div").not($(this)).addClass("fade");
    })
    .on("mouseleave", function () {
      $("div").removeClass("fade nofade");
    });
})();
