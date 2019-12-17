(function($){

  const win = $(window);
  const myWrap = $('#wrap');
  // header ----
  const myfull = myWrap.children('.fullBox');
  const myHead = myWrap.children('#headBox');
  const myNav = myHead.children('#gnb');
  const myUl = myNav.children('ul');
  const myLi = myUl.children('li');
  const myTab = myLi.children('a');

  // resume ----
  const myResume = myfull.children('#resume-area');
  const resumeBtn = myResume.find('.btn-area');
  const hiddBox = myResume.find('.hidden-box');

  // portfolio ---

  const portFolio = $('#portfol-area');
  const pLeftArea = portFolio.find('.p-left-box');
  const portUl = pLeftArea.children('ul');
  const portLi = portUl.children('li');
  const portBtn = portLi.children('button');

  const pRightArea = portFolio.find('.p-right-box');
  const firstArea = pRightArea.children('.first-area');
  const seconArea = pRightArea.children('.secound-area');
  const thirdArea = pRightArea.children('.third-area');
  

  // header 영역----------------------------
  myTab.on('click focus', function(e){
    e.preventDefault();
    let i = $(this).parent('li').index();
    // console.log(i);
    myfull.children('div').css({display:'none'});
    myfull.children('div').eq(i).css({display:'block'});

  });
  // main 영역----------------------------

  // resume 영역--------------------------

  resumeBtn.on('click', function(e){
    e.preventDefault();
    let hiLeft = hiddBox.css('left') == 0+'px';
    if( !hiLeft ){
      hiddBox.animate({left:0}); 
    } else if(hiLeft ) {
      hiddBox.removeAttr('style');
    }
  });

  // portfolio 영역-----------------------
  
  // first-area-----------------------------
  const firstSlide = firstArea.find('.slide-area');
  const firstUl = firstSlide.children('ul');
  const firstLi = firstUl.children('li');
  const btnArea = firstSlide.children('.btn-area');
  const firstBtn = btnArea.children('button');

  const firstScroll = firstArea.find('.scroll-area');
  const scrollUl = firstScroll.find('ul');
  const scrollLi = scrollUl.children('li');

  const imgChange = firstArea.find('.img-change');
  const ulOne = imgChange.children('.ul-one');
  const liOne = ulOne.children('li');
  const ulTwo = imgChange.children('.ul-two');
  const liTwo = ulTwo.children('li');

  const comBox = firstArea.find('.complete-box');



  let myN = 0;
  let len = firstLi.length;
  let url = `./img/portfolio/first/`;
  for(let i=0; i<len; i++){
    let img = [ 'img01.jpg', 'img02.jpg', 'img03.jpg', 'img04.jpg' ];
    firstLi.eq(i).css({ backgroundImage:`url(${url+img[i]})`,
    backgroundSize:'cover', backgroundPosition:'50% 50%', 
    backgroundRepeat:'no-repeat'});
  }
  firstLi.eq(-1).clone(true).prependTo(firstUl);
  len++;

  firstBtn.on('click', function(e){
    e.preventDefault();
    let hasC = $(this).hasClass('next');
    if(hasC){
      myN++;
      if( myN >= len-1){
        myN = 0;
        firstUl.css({marginLeft:'100%'});
      }   
    } else { 
      myN--; 
    } firstUl.animate({ marginLeft:-100 * myN + '%'}, function(){
      if(myN < 0 ){
        myN = len-2;
        firstUl.css({marginLeft:-100 * myN + '%'});
      }
    });    
  });

  // scroll landing area --------------

  $('.sec03').on('mousewheel DOMMouseScroll', function(e){

    (e.originalEvent.wheelDelta) ? 
    n = e.originalEvent.wheelDelta * -1 : 
    n = e.originalEvent.detail * 40;

    let scrollLoc = firstScroll.offset().top;
    if( scrollLoc > 100){
      $('.area02').addClass('action');
    }
  });

  let imgBox = [ 'valy02.jpg', 'kota02.jpg', 'manyla02.jpg' ];
  scrollLi.on('mouseenter', function(){
    let i = $(this).index();
    scrollLi.eq(i).parents('.area02').css({ backgroundImage:`url(${url+imgBox[i]})`});
  });

  // background-image change area --------------

  let land = [ 'austria.jpeg', 'spain.jpeg', 'rondon.jpeg', 
  'moskba.jpeg', 'brazil.jpeg', 'canada.jpeg' ];
  let imgLen = imgChange.find('li').length;
  for(let i=0; i<imgLen; i++){
  imgChange.find('li').eq(i).css({backgroundImage:`url(${url+land[i]})`,
  backgroundSize:'cover', backgroundPosition:'50% 50%', 
  backgroundRepeat:'no-repeat' })
}
  let txt = [ '오페라 도시, 호주 시드니', '예술의 도시, 스페인 바르셀로나', '문화 금융의 중심지, 영국 런던'];
  let txtT = [ '동방의 진주, 러시아 모스크바', '축구가 다가 아니야! 브라질', '호수도, 도시도 모두 아름다워 캐나다!' ];
  liOne.on('mouseenter', function(){
    let i = $(this).index();
    $(this).css({ border:'3px solid #d68e0f', boxSizing:'border-box'});
    $(this).siblings().css({border:0});
    liTwo.css({border:0});
    imgChange.children('span').text(txt[i]);
    $('.sec04').css({ backgroundImage:`url(${url+land[i]})`,
    backgroundSize:'cover', backgroundPosition:'50% 50%', 
    backgroundRepeat:'no-repeat' })
  });
  liTwo.on('mouseenter', function(){
    let i = $(this).index();
    $(this).css({ border:'3px solid #d68e0f', boxSizing:'border-box'});
    $(this).siblings().css({border:0});
    liOne.css({border:0});
    imgChange.children('span').text(txtT[i]);
    let landT = [ 'moskba.jpeg', 'brazil.jpeg', 'canada.jpeg' ]; 
    $('.sec04').css({ backgroundImage:`url(${url+landT[i]})`,
    backgroundSize:'cover', backgroundPosition:'50% 50%', 
    backgroundRepeat:'no-repeat' })
  });

  comBox.on('mouseenter', function(){
    $('img').stop().animate({top:'-1980px'}, 3000);
  });
   comBox.on('mouseleave', function(){
     $('img').stop().animate({top:'20px'}, 3000);
   });

   // secound-area-----------------------------

   const secoundSlide = seconArea.find('.slide-area');
   const secoundUl = secoundSlide.children('ul');
   const secoundLi = secoundUl.children('li');
   const btnAreaT = secoundSlide.children('.btn-area');
   const secoundBtn = btnAreaT.children('button');
   const cobBox02 = seconArea.children('.complete-box');

   let myNt = 0;
   let lenT = secoundLi.length;
    let urlT = `./img/portfolio/secound/`;
    for(let i=0; i<lenT; i++){
      let img = [ 'img01.jpg', 'img02.jpg', 'img03.jpg' ];
      secoundLi.eq(i).css({ backgroundImage:`url(${urlT+img[i]})`,
      backgroundSize:'cover', backgroundPosition:'50% 50%', 
      backgroundRepeat:'no-repeat' })
    }

    // slide area -------------
    secoundLi.eq(-1).clone(true).prependTo(secoundUl);
    lenT++;

    const moveSlide = function(){
      $('.next02').trigger('click');
    }
    secoundLi.on('click', function(e){
      e.preventDefault();
      let va = $(this).index();
      myNt = va;
      moveSlide(myNt);
    });
    const goSlide = function(){
      go = setInterval(function(){
        moveSlide();
      }, 2000);
    };
    const stopSlide = function(){
      clearInterval(go);
    };
    goSlide();
    secoundSlide.on({'mouseenter':stopSlide, 'mouseleaver':goSlide});

    secoundBtn.on('click', function(e){
      e.preventDefault();
      let hasC02 = $(this).hasClass('next02');
      if(hasC02){
        myNt++;
        if(myNt >= lenT-1){
          myNt = 0;
          secoundUl.css({marginLeft:'100%'});
        }
      } else {
        myNt--;
      } secoundUl.animate({marginLeft:-100 * myNt + '%'}, function(){
        if(myNt < 0){
          myNt = lenT-2;
          secoundUl.css({marginLeft:-100 * myNt + '%'});
        }
      });
    });
     // scroll landing area -------------

     const secoundSec03 = seconArea.children('.sec03');
     const secoundScroll = seconArea.find('.scroll-area');

     secoundSec03.on('mousewheel DOMMouseScroll', function(e){

      (e.originalEvent.wheelDelta) ? 
      n = e.originalEvent.wheelDelta * -1 : 
      n = e.originalEvent.detail * 40;
  
      let scrollLoc = secoundScroll.offset().top;
      if( scrollLoc > 200){
        $('.img01').addClass('action');
        $('.img02').addClass('action');
      }
    });

     // text landing area -------------
    const secoundSec04 = seconArea.children('.sec04-t');
    const secoundTxtArea = secoundSec04.children('.text-change');
    const txtUl = secoundTxtArea.children('ul');
    const txtLi = txtUl.children('li');
    const txtArea = secoundTxtArea.children('p');

    let txt02 = [ 
    '이런 식으로', 
    '마우스를 갖다대면', 
    '해당하는 이미지에 맞는', '문구로 바뀝니다!' ];
    
    for(let i=0; i<txtLi.length; i++){
      let imgBox = [ 'coffee02.jpg', 'dessert.jpg', 'drink.jpg', 'bakery.jpg' ];
      txtLi.eq(i).css({backgroundImage:`url(${urlT+imgBox[i]})`, backgroundSize:'cover',
      backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
    }
    txtLi.on('mouseenter', function(){
      let i = $(this).index();
      $(this).siblings().css({border:0, zIndex:0});
      $(this).css({position:'relative', border:'5px solid #fff', 
      zIndex:10, boxSizing:'border-box'});
      txtArea.text(txt02[i]);
    });

    cobBox02.on('mouseenter', function(){
      $('img').stop().animate({top:'-850px'}, 3000);
    });
    cobBox02.on('mouseleave', function(){
       $('img').stop().animate({top:'20px'}, 3000);
     });
  

  // third-area-----------------------------

     const thirdUl = thirdArea.find('.third-ul');
     const thirdLi = thirdUl.children('li');
     const thirdSec03 = thirdArea.children('.sec03');
     const thirdUl02 = thirdSec03.children('.third-ul-02');
     const thirdLi02 = thirdUl02.children('li');
     const thirdCon = thirdSec03.children('.conBox');
     const thirdConArea = thirdCon.children('.content-area');
     const thirdImg = thirdConArea.children('.third-img-area');
     const thirdTxtArea = thirdCon.children('.txt-area');
     const thirdSpan = thirdTxtArea.find('span');
     const thirdSec04 = thirdArea.children('.sec04-third');
     const thirdLi03 = thirdSec04.find('.img-li');
     const thirdL03P = thirdLi03.children('p');
     const divLine = thirdSec04.children('.line');
     const lineLi = divLine.find('.line-li');
     const cobBox03 = thirdArea.children('.complete-box')

     let thirdLen = thirdLi.length;
     let thirdN = 0;
     let thirdUrl = `./img/portfolio/third/`;
     let imgThird = [ 'perfume00.jpg', 'perfume01.jpg', 
     'perfume02.jpg', 'perfume03.jpg' ];

     let thirdTabImg = [ 'season01.jpg', 'season02.jpg' ,
     'season03.jpg', 'season04.jpg' ];

     let thirdTabTxt = [ '내가 클릭한', '탭에 맞는',
     '문구와 이미지가', '나타납니다' ];
     
     for(let i=0; i<thirdLen; i++){
       let j=thirdUrl+imgThird[i];
       //console.log(j)
      thirdLi.eq(i).css({ backgroundImage:'url('+j+')' ,
      backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat' });
     }

     setInterval(function(){
      thirdN++;
       if(thirdN > thirdLen-1){
        thirdN = 0;
       }
        thirdLi.eq(thirdN).css({zIndex:10});
        thirdLi.eq(thirdN).fadeIn(function(){
        thirdLi.eq(thirdN).siblings().hide(0);
        thirdLi.css({zIndex:0});
        });
     },5000);

     thirdLi02.on('click', function(){
      let i = $(this).index();
      thirdImg.css({backgroundImage:`url(${thirdUrl+thirdTabImg[i]})`});
      thirdSpan.text(thirdTabTxt[i]);
     });

     thirdLi03.on('mouseenter', function(){
       let i = $(this).index();
       thirdL03P.eq(i).show();
       if( i==0 ){
        lineLi.eq(0).addClass('action');
        lineLi.eq(0).siblings().removeClass('action');
       } else if( i==1 ){
        lineLi.eq(1).addClass('action');
        lineLi.eq(1).siblings().removeClass('action');
       } else {
        lineLi.eq(2).addClass('action');
        lineLi.eq(2).siblings().removeClass('action');
       }
     });

    cobBox03.on('mouseenter', function(){
      $('img').stop().animate({top:'-930px'}, 3000);
    });
    cobBox03.on('mouseleave', function(){
       $('img').stop().animate({top:'20px'}, 3000);
     });



  //  left-box-------------------------------

  portBtn.on('click focus', function(e){
    e.preventDefault();
    let i = $(this).parent('li').index();
    if( i === 0 ){
      $('.intro-area').css({display:'none'});
      firstArea.css({display:'block'});
      seconArea.css({display:'none'});
      thirdArea.css({display:'none'});
    } else if( i === 1 ){
      $('.intro-area').css({display:'none'});
      firstArea.css({display:'none'});
      seconArea.css({display:'block'});
      thirdArea.css({display:'none'});
    } else if( i === 2 ){
      $('.intro-area').css({display:'none'});
      firstArea.css({display:'none'});
      seconArea.css({display:'none'});
      thirdArea.css({display:'block'});
    } else { 
      $('.intro-area').css({display:'block'});
      firstArea.css({display:'none'});
      seconArea.css({display:'none'});
      thirdArea.css({display:'none'});
    }
  });


  // study 영역---------------------------

})(jQuery);