$(function () {
  "use strict";
  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  $(document).ready(function () {
    $("header nav").meanmenu();
  });

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  $(document).ready(function () {
    let owl = $("#product-in-slider");
    owl.owlCarousel({
      loop: true,
      nav: true,
      margin: 10,
      navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        960: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
    owl.on("mousewheel", ".owl-stage", function (e) {
      if (e.deltaY > 0) {
        owl.trigger("next.owl");
      } else {
        owl.trigger("prev.owl");
      }
      e.preventDefault();
    });
  });

  $.validator.setDefaults({
    submitHandler: function () {
      alert("submitted!");
    },
  });

  $(document).ready(function () {
    $("#contact-form").validate({
      rules: {
        firstname: "required",
        email: {
          required: true,
          email: true,
        },
        lastname: "required",
        message: "required",
        agree: "required",
      },
      messages: {
        firstname: "Please enter your firstname",
        email: "Please enter a valid email address",
        lastname: "Please enter your lastname",
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters",
        },
        message: "Please enter your Message",
        agree: "Please accept our policy",
      },
      errorElement: "div",
      errorPlacement: function (error, element) {
        // Add the `help-block` class to the error element
        error.addClass("help-block");

        if (element.prop("type") === "checkbox") {
          error.insertAfter(element.parent("input"));
        } else {
          error.insertAfter(element);
        }
      },
      highlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-error")
          .removeClass("has-success");
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element)
          .parents(".col-md-4, .col-md-12")
          .addClass("has-success")
          .removeClass("has-error");
      },
    });
  });
});

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
// jQuery code to handle modal opening and closing
$(document).ready(function () {
  $("#readMoreBtn").click(function () {
    $("#myModal").css("display", "block");
  });

  $("#closeModalBtn").click(function () {
    $("#myModal").css("display", "none");
  });

  $(window).click(function (e) {
    if (e.target.id === "myModal") {
      $("#myModal").css("display", "none");
    }
  });

  $("#readMoreBtn2").click(function () {
    $("#myModal2").css("display", "block");
  });

  $("#closeModalBtn2").click(function () {
    $("#myModal2").css("display", "none");
  });

  $(window).click(function (e) {
    if (e.target.id === "myModal2") {
      $("#myModal2").css("display", "none");
    }
  });

  $(".readMoreBtn3").click(function () {
    $("#myModal3").css("display", "block");
  });

  $("#closeModalBtn3").click(function () {
    $("#myModal3").css("display", "none");
  });

  $(window).click(function (e) {
    if (e.target.id === "myModal3") {
      $("#myModal3").css("display", "none");
    }
  });

  $('.register-btn').click(function () {
    $('#login-form').css('display', 'none');
    $('#Registration-form').css('display', 'block');
  });

  $('.login-btn').click(function () {
    $('#Registration-form').css('display', 'none');
    $('#login-form').css('display', 'block');
  });
});
