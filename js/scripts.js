$(".image").click(function() {
  $(this).children(".hideMe").slideToggle("1500");
  $(this).children(".show").toggle("1500");
});

$("#work1")
  .mouseenter(function() {
    $("#overlay").show("slow");
  })
  .mouseleave(function() {
    $("#overlay").hide("slow");
  });