
(function($) {
  $.fn.dimaslider = function(settings){
    let defaults = {
      auto: 2,
      rate: 500
    };
    let obj = $.extend(defaults, settings);

    images = $(obj.images);	
    auto = obj.auto;
    btnPrev = $(obj.btnPrev);
    btnNext = $(obj.btnNext);
    rate = obj.rate;
    
    var i = 0;
	
    var isRun = false;
	
	  var prev = function () {        
        if(isRun){
            return;
        }
        
        isRun = true;
        
		images.eq(i).animate({
                    opacity: '0',
                }, 500);
		
		i--;
		
		if (i < 0) {
			i = images.length - 1;
		}

		images.eq(i).animate({
                    opacity: '1'
                }, rate, function(){
                    isRun = false;
                });
    }

    var next = function () {        
      if(isRun){
          return;
      }
      
      isRun = true;
      
    images.eq(i).animate({
                  opacity: '0',
              }, 500);
  
    i++;
  
    if (i > images.length - 1) {
      i = 0;
    }

    images.eq(i).animate({
                  opacity: '1'
              }, rate, function(){
                  isRun = false;
              });
    }

    $(btnPrev).on('click', function(){ 
      console.log(obj); 
      prev();
    });
    $(btnNext).on('click', function(){ 
      console.log(obj); 
      next();
    });


    return this;
  };

})(jQuery);