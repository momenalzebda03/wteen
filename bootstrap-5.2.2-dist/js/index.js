$(document).ready(function () {
  $(".navbarDropdown").click(function () {
    if ($(this).hasClass("show")) {
      $(".navbarDropdown").removeClass("rotate180");
      $(this).addClass("rotate180");
    } else {
      $(".navbarDropdown").removeClass("rotate180");
    }
  });
  $(document).on("click", (e) => {
    if (!$(e.target).hasClass("navbarDropdown")) {
      $(".navbarDropdown").addClass("color_black");
      $(".navbarDropdown").removeClass("rotate180");
    }
  });
  var boolen = true;
  $("#menu").click(() => {
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

  $(".image_network").each(function (index) {
    var topPosition = (4 - index) * 10 + -40;
    $(this).css("top", topPosition + "px");
    var rightPosition = index * -10 + 410;
    $(this).css("right", rightPosition + "px");
  });

  $("#icon_top").click(() => {
    window.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  });

  $(".image_column").each(function () {
    var firstImage = $(this).find(".hover_why#firstImage");
    var lastImage = $(this).find(".hover_why#lastImage");

    $(this).hover(
      function () {
        firstImage.hide();
        lastImage.show();
      },
      function () {
        firstImage.show();
        lastImage.hide();
      }
    );
  });

  var restaurantCheckbox = $("#restaurantCheckbox");
  restaurantCheckbox.change(function () {
    if ($(this).is(":checked")) {
      $("#label1").removeClass("font_bold").addClass("font_normal");
      $("#label2").removeClass("font_normal").addClass("font_bold");
      $("#form_restaurants").removeClass("form_flex").addClass("form_none");
      $("#form_distributors").removeClass("form_none").addClass("form_flex");
    } else {
      $("#label1").removeClass("font_normal").addClass("font_bold");
      $("#label2").removeClass("font_bold").addClass("font_normal");
      $("#form_restaurants").removeClass("form_none").addClass("form_flex");
      $("#form_distributors").removeClass("form_flex").addClass("form_none");
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });
});
