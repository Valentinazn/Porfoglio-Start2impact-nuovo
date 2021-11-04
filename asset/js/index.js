$( document ).ready(function() {

  $( ".item" ).click(function() {

     $(this).find(".item-content").addClass("item-content-open");

   });

   /* Open Panel */
$( ".menu-icon, .nav-item ").on('click', function() {
  $(".menu-panel").toggleClass("menu-panel-open");
  $('.icon-hamburger').toggleClass('icon-hamburger-open');

});





});
