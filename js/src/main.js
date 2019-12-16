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
  const visiBox = myResume.find('.visible-box');
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
    //재클릭 시 원위치 어떻게??
  });

  // portfolio 영역-----------------------

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
    // 왜 안 되는 거여~~~~~ 
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