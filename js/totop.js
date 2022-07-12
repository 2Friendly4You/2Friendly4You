// go to top of the page, when the user scrolls down

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#totopbtn").fadeIn();
    } else {
      $("#totopbtn").fadeOut();
    }
  });
  $("#totopbtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
  });
});
