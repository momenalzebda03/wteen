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
      $(".navbarDropdown").addClass("colorBlack");
      $(".navbarDropdown").removeClass("rotate180");
    }
  });
  var boolen = true;
  $("#menu").click(() => {
    if (boolen) {
      $("#imageMenu").attr("src", "assest/images/iconClose.svg");
      boolen = false;
    } else {
      $("#imageMenu").attr("src", "assest/images/iconMenu.svg");
      boolen = true;
    }
  });

  $(".imageNetwork").each(function (index) {
    var topPosition = (4 - index) * 10 + -40;
    $(this).css("top", topPosition + "px");
    var rightPosition = index * -10 + 410;
    $(this).css("right", rightPosition + "px");
  });

  $("#iconTop").click(() => {
    window.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  });

  $(".imageColumn").each(function () {
    var firstImage = $(this).find(".hoverWhy#firstImage");
    var lastImage = $(this).find(".hoverWhy#lastImage");

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
      $("#label1").removeClass("fontBold").addClass("fontNormal");
      $("#label2").removeClass("fontNormal").addClass("fontBold");
      $("#formRestaurants").removeClass("sectionFlex").addClass("sectionNone");
      $("#formDistributors").removeClass("sectionNone").addClass("sectionFlex");
    } else {
      $("#label1").removeClass("fontNormal").addClass("fontBold");
      $("#label2").removeClass("fontBold").addClass("fontNormal");
      $("#formRestaurants").removeClass("sectionNone").addClass("sectionFlex");
      $("#formDistributors").removeClass("sectionFlex").addClass("sectionNone");
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