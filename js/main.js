
var activeCircle = "circle1";

$( document ).ready(function() {
    $(".circle").on("click", function() {
      var elem = $(this);
      var clickedId = elem.attr("id");
      var idNum = clickedId.slice(-1);
      var bgUrl = "http://lorempixel.com/1100/400/city/"+idNum
      if (activeCircle !== clickedId){
        $("#"+activeCircle).addClass("circleFilled");
        activeCircle = clickedId;
        $("#"+clickedId).removeClass("circleFilled");
        $("#background").css("background", "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("+bgUrl+")");
      }
    })
});
