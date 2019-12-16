(function($){
  const body = $('body');
  const wrap = $('#wrap');

   // header area==================
   wrap.append('<header id="headBox"></header>');

   const headBox = $('#headBox');
   const jsLink = (temp) => {
    return body.append(`<script src="./js/src/${temp}.js"></script>`);
  };
  headBox.load('./html/temp/header.html');

  // fullBox area==================
  wrap.append('<div class="fullBox"></div>');

  const fullBox = $('.fullBox');
  fullBox.load('./html/temp/fullBox.html', () => {

    // intro area==================
    fullBox.append('<div id="main-area"></div>');
    const mainArea = $('#main-area');
    mainArea.load('./html/temp/main-area.html');
    
    // resume area==================
    fullBox.append('<div id="resume-area"></div>');
    const resumeArea = $('#resume-area');
    resumeArea.load('./html/temp/resume-area.html');
    
    // portfolio area==================
    fullBox.append('<div id="portfol-area"></div>');
    const portfolArea = $('#portfol-area');
    portfolArea.load('./html/temp/portfol-area.html');
    
    // study area==================
    fullBox.append('<div id="study-area"></div>');
    const studyArea = $('#study-area');
    studyArea.load('./html/temp/study-area.html');
  });

  setTimeout(function(){
    jsLink('main');
  },200);

})(jQuery);