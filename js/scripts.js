$(".image").click(function() {
  $(this).children(".hideMe").slideToggle("1500");
  $(this).children(".show").toggle("1500");
});