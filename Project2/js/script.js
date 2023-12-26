// შეასრულეთ შემდეგი კოდი, როდესაც დოკუმენტი მზად იქნება
$(function () {
  "use strict"; // Enable strict mode for better error handling

  // Hide the loader after a delay of 1500 milliseconds
  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  // Apply the "meanmenu" plugin to convert the navigation menu into a responsive menu
  $("header nav").meanmenu();

  // Enable tooltips for elements with the data-toggle attribute set to "tooltip"
  $('[data-toggle="tooltip"]').tooltip();

  // Add overlay class to #wrapper when hovering over megamenu items
  $(".main-menu ul li.megamenu").mouseover(function () {
    if (!$(this).closest("#wrapper").length) {
      $("#wrapper").addClass("overlay");
    }
  });

  // Remove overlay class from #wrapper when leaving megamenu items
  $(".main-menu ul li.megamenu").mouseleave(function () {
    $("#wrapper").removeClass("overlay");
  });

  // Initialize Owl Carousel for the product slider
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
      0: { items: 1 },
      600: { items: 2 },
      960: { items: 3 },
      1200: { items: 4 },
    },
  });

  // Handle mousewheel events to navigate the Owl Carousel
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaY > 0) {
      owl.trigger("next.owl");
    } else {
      owl.trigger("prev.owl");
    }
    e.preventDefault();
  });

  // Set default settings for jQuery Validation plugin
  $.validator.setDefaults({
    submitHandler: function () {
      alert("submitted!");
    },
  });

  // Validate the contact form using jQuery Validation
  $("#contact-form").validate({
    rules: {
      firstname: "required",
      email: { required: true, email: true },
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

      // Adjust placement for checkboxes
      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.closest("label"));
      } else {
        error.insertAfter(element);
      }
    },
    highlight: function (element, errorClass, validClass) {
      $(element).closest(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
    },
    unhighlight: function (element, errorClass, validClass) {
      $(element).closest(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
    },
  });
});

// Execute the following code when the document is fully loaded
$(document).ready(function () {
  // Initialize Owl Carousel for another section
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: true,
    loop: true,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 },
    },
  });

  // Handle modal opening and closing
  $("#readMoreBtn").click(function () {
    $("#myModal").css("display", "block");
  });

  $("#closeModalBtn").click(function () {
    $("#myModal").css("display", "none");
  });

  // Close modal on window click
  $(window).click(function (e) {
    if (e.target.id === "myModal") {
      $("#myModal").css("display", "none");
    }
  });

  // Additional modals
  $("#readMoreBtn2").click(function () {
    $("#myModal2").css("display", "block");
  });

  $("#closeModalBtn2").click(function () {
    $("#myModal2").css("display", "none");
  });

  // Close modal on window click
  $(window).click(function (e) {
    if (e.target.id === "myModal2") {
      $("#myModal2").css("display", "none");
    }
  });

  // More modals...

  // Toggle between Registration and Login Forms
  $(".register-btn").click(function () {
    $("#login-form").css("display", "none");
    $("#Registration-form").css("display", "block");
  });

  $(".login-btn").click(function () {
    $("#Registration-form").css("display", "none");
    $("#login-form").css("display", "block");
  });
});
