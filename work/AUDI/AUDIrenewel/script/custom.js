$(document).ready(function(){
 
  
 
  

  //sub_menu
  $('.gnb>li>a').mouseenter(function(){
    $(this).siblings('.black_bar').stop().slideDown();
  })
  $('.black_bar').mouseenter(function(){
    $(this).stop().slideDown();
  })
  $('.black_bar').mouseleave(function(){
    $(this).stop().slideUp();
  })
  $('.gnb>li>a').mouseout(function(){
    $(this).siblings('.black_bar').stop().slideUp();
  })



  


//slide

  let num=0;
  $('.slides>a').eq(num).addClass('active');

  setInterval(function(){

   if(num<2){
     num++;
   }else{
     num=0
   }
   $('.slides>a').removeClass('active')
   $('.slides>a').eq(num).addClass('active');
  },3500);












//top btn

let $html=$('html,body');
$('.goTop').click(function(){
  $html.animate({'scrollTop':0});
});








// modal
$('#close_btn').click(function(){
$('#pop').hide();
});


  














});