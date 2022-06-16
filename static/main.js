$(document).ready(function (){
    $(".icon-hambuger-monmi").click(function (e){
       e.preventDefault();
       $(".submenu-left-monmi").slideToggle();
    })

})
$(window).scroll(function(){
  var aTop = $('.hero_single').height() - 100;
  if($(this).scrollTop() >= aTop){
    $(".cart-icon-head i").css('color','black')
  }else{
    $(".cart-icon-head i").css('color','white')
  }
});
