
$(document).ready(function(){
//photo_review
//photo_review
const $ptSlideWrap=$('.photo_slideWrap'),
      $ptSlide=$('.photo_slide'),
      $ptImg=$('.ptImg'),
      $ptimgA=$('.ptImg').find('a'),
      $ptPrev=$('.ptPrev'),
      $ptNext=$('.ptNext');

let ptimgCount=$ptimgA.length,
    currentPt=0;
    
$(window).resize(function(){
  let win=$(this),
      winWid=win.width();
      currentPt=0;
      
      function gotosliderpt(i){
        if(winWid<960){
          $ptImg.css('left',(-25*i)+'%');
          currentPt=i;
          if(winWid<768){
            $ptImg.css('left',(-50*i)+'%');
            currentPt=i;
          }
        }else{
          $ptImg.css('left',(-20*i)+'%');
          currentPt=i;
        }
      
      }
      $ptPrev.click(function(){
        if(winWid<960){
          if(currentPt==0){
            gotosliderpt(7)
          }else{
            gotosliderpt(currentPt-1)
          }
          if(winWid<768){
            if(currentPt==0){
              gotosliderpt(9)
            }else{
              gotosliderpt(currentPt-1)
            }
          }
        }else{
          if(currentPt==0){
            gotosliderpt(9)
          }else{
            gotosliderpt(currentPt-1)
          }
        } 
      })
    
      $ptNext.click(function(){
        if(winWid<960){
          if(currentPt<7){
            gotosliderpt(currentPt+1)
          }else{
            gotosliderpt(0)
          }
          if(winWid<768){
            if(currentPt<9){
              gotosliderpt(currentPt+1)
            }else{
              gotosliderpt(0)
            }
          }
        }else{
          if(currentPt<9){
            gotosliderpt(currentPt+1)
          }else{
            gotosliderpt(0)
          }
        } 
      })   
}).resize();

})//e:ready