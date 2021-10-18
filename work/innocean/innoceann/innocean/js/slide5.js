$(document).ready(function(){
  let num=0;
  $('.slide>a').eq(num).addClass('active');

  setInterval(function(){

   if(num<2){
     num++;
   }else{
     num=0
   }
   $('.slide>a').removeClass('active')
   $('.slide>a').eq(num).addClass('active');
  },3500);








//top btn

  let $html=$('html,body');
  $('.goTop').click(function(){
    $html.animate({'scrollTop':0});
  });
  
   
});






