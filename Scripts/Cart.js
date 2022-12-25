$(function() {
    var count = 0;
    $("#increment").click(function() {
      count++;
      $("#count").text(count);
    });
    $("#decrement").click(function() {
        if (count != 0)
            count--;
      $("#count").text(count);
    });
  });