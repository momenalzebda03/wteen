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
  var boolen = true;
  $("#menu").click(function () {
    if (boolen) {
      $("#image_menu").attr(
        "src",
        "images/page_image_all/images_navbar/icon_close.svg"
      );
      boolen = false;
    } else {
      $("#image_menu").attr(
        "src",
        "images/page_image_all/images_navbar/icon_menu.svg"
      );
      boolen = true;
    }
  });
});
