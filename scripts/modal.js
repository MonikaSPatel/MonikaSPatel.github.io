$(document).ready(function () {
  // MODAL
  var modalText = {
    degreekey: {
      title: "Degreekey",
      tag: "Learning Portal.",
      detail:
        "Degreekey is the learning platform where cources and books manage among School, Teaches, University and Students.",
    },
    curio: {
      title: "Curio",
      tag: "Virtual HealthCare Platform",
      link: "https://catterfly.com",
      detail:
        "Curio is a Health care website that lets pregant ledy to keep records of her sleep and guide her for every day activity.",
    },
    writi: {
      title: "Virtual HealthCare Platform",
      tag: "HealthCare",
      link: "https://writi.ca",
      detail:
        "Virtual Healthcare Platform that is a Canada based startup product which helps the nursing home to automate their prescription filling process. It also sends a copy of the prescription to the pharmacy which distributes the required medicine to nursing home based on prescription.",
    },
    ccf: {
      title: "The center court food- Food Service Provider",
      tag: "E-commerce",
      link: "https://www.thecentrecourtrestaurant.com",
      detail: "It is E-commerce website to provide food service.",
    },
    ccc: {
      title: "The center court - Cake Service Provider Website",
      tag: "E-commerce",
      link: "https://www.thecentrecourtcakes.com",
      detail:
        "It is E-commerce website to provide cakes service",
    },
    '5ine': {
      title: "5ine - jewellery",
      tag: "E-commerce",
      link: "https://www.5inejewels.co.uk",
      detail: "Uk based E-commerce company that sells jewellery.",
    },
    medtouch: {
      title: "MedTouch - Virtual HealthCare Platform",
      tag: "HealthCare",
      link: "",
      detail:
        "Virtual Healthcare Platform that is a US client developing for india.",
    },
  };

  $("#gallery .button").on("click", function () {
    fillModal(this.id);
    $(".modal-wrap").addClass("visible");
  });

  $(".close").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  $(".mask").on("click", function () {
    $(".modal-wrap, #modal .button").removeClass("visible");
  });

  var carousel = $("#carousel"),
    slideWidth = 700,
    threshold = slideWidth / 3,
    dragStart,
    dragEnd;

  setDimensions();

  $("#next").click(function () {
    shiftSlide(-1);
  });
  $("#prev").click(function () {
    shiftSlide(1);
  });

  carousel.on("mousedown", function () {
    if (carousel.hasClass("transition")) return;
    dragStart = event.pageX;
    $(this).on("mousemove", function () {
      dragEnd = event.pageX;
      $(this).css("transform", "translateX(" + dragPos() + "px)");
    });
    $(document).on("mouseup", function () {
      if (dragPos() > threshold) {
        return shiftSlide(1);
      }
      if (dragPos() < -threshold) {
        return shiftSlide(-1);
      }
      shiftSlide(0);
    });
  });

  function setDimensions() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      slideWidth = $(window).innerWidth();
    }
    $(".carousel-wrap, .slide").css("width", slideWidth);
    $(".modal").css("max-width", slideWidth);
    $("#carousel").css("left", slideWidth * -1);
  }

  function dragPos() {
    return dragEnd - dragStart;
  }

  function shiftSlide(direction) {
    if (carousel.hasClass("transition")) return;
    dragEnd = dragStart;
    $(document).off("mouseup");
    carousel
      .off("mousemove")
      .addClass("transition")
      .css("transform", "translateX(" + direction * slideWidth + "px)");
    setTimeout(function () {
      if (direction === 1) {
        $(".slide:first").before($(".slide:last"));
      } else if (direction === -1) {
        $(".slide:last").after($(".slide:first"));
      }
      carousel.removeClass("transition");
      carousel.css("transform", "translateX(0px)");
    }, 700);
  }

  function fillModal(id) {
    $("#modal .title").text(modalText[id].title);
    $("#modal .detail").text(modalText[id].detail);
    $("#modal .tag").text(modalText[id].tag);
    if (modalText[id].link)
      $("#modal .button")
        .addClass("visible")
        .parent()
        .attr("href", modalText[id].link);

    $.each($("#modal li"), function (index, value) {
      $(this).text(modalText[id].bullets[index]);
    });
    $.each($("#modal .slide"), function (index, value) {
      console.log(index);
      $(this).css({
        background:
          "url('img/slides/" +
          id +
          "/" +
          id +
          "-" +
          index +
          ".png') center center/cover",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      });
    });
  }
});
