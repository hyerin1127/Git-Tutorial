$(document).ready(function(){

  const $sliderWrap=$('.sliderWrap'),
  $slides=$sliderWrap.find('.slides'),
  $slide=$slides.find('a');
  
  const $arrow=$sliderWrap.find('.arrow'),
  $btnPrev=$arrow.find('.btnPrev'),
  $btnNext=$btnPrev.next('.btnNext');
  
  const $indicators=$sliderWrap.find('.indicators'),
  indicator=$indicators.find('a'),
  slideCount=$slide.length; 
  
  console.log(slideCount);
  
  let currentIdx=0, 
  input='',
  timer;
  
  $slides.css('width',100*slideCount+'%');
  update();
  
  // indicator
  $indicators.find('a').click(function(e){
    e.preventDefault(); 
    let idx=$(this).index(); 
    gotoSlider(idx);
    $(this).addClass('active').siblings().removeClass('active');
  })
  
    // gotoSlider
    function gotoSlider(idx){
      $slides.animate({'left':-100*idx+'%'},3500);
      currentIdx=idx; 
      update(); 
    }
  
    $arrow.find('a').click(function(){
      if($(this).hasClass('btnPrev')){
        gotoSlider(currentIdx-1);
      } else {
        gotoSlider(currentIdx+1);
      }
    })
  
    function update(){
      if(currentIdx==0){
        $btnPrev.addClass('disabled');
      } else {
        $btnPrev.removeClass('disabled');
      }
  
      if(currentIdx==slideCount-1){
        $btnNext.addClass('disabled');
      } else {
        $btnNext.removeClass('disabled');
      }
  
    $indicators.find('a').eq(currentIdx).addClass('active').siblings().removeClass('active');
    }
  
    // start()
    function start(){
      timer=setInterval(function(){
        let nextIdx=(currentIdx+1)%slideCount; 
        gotoSlider(nextIdx)
      },4000)
    }
    start();
  
    // stop()
    function stop(){
      clearInterval(timer)
    }
  
    $sliderWrap.mouseenter(stop).mouseleave(start);

 
  
  


  // slide
  $('.recom_list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true
        }
      }
      
    ]
  });
});