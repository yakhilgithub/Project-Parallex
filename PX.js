$(function() {
  "use strict";

  var parallex = $(".parent > .parallex");

  $(window).on('scroll', function() {
    parallex.css({
      "transform": "translate(0, " + $(window).scrollTop() + "px)"
    });
    if ($('.parent > div').offset.top() >= $(window).scrollTop()) {
      parallex = $(".parent > .parallex, .parent > div");
    }
  });

});

