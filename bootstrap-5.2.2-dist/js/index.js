$(document).ready(function () {
  $(".navbarDropdown").click(function () {
    if ($(this).hasClass("show")) {
      $(".navbarDropdown").removeClass("rotate180");
      $(this).addClass("rotate180");
    } else {
      $(".navbarDropdown").removeClass("rotate180");
    }
  });
  $(document).on("click", function (e) {
    if (!$(e.target).hasClass("navbarDropdown")) {
      $(".navbarDropdown").addClass("color_black");
      $(".navbarDropdown").removeClass("rotate180");
    }
  });
});
