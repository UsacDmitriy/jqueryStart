(function($) {
  $.fn.duplicate = function(settings){
    let defaults = {
      d: ' ',
      cnt: 2
    };
    let options = $.extend(defaults, settings);

    console.log(options);
    
    this.each(function () { 
      let elem = $(this);

      let text = elem.html();
      let out = '';

      for (let i = 0; i < options.cnt; i++) {
        out += text;

        if (i < options.cnt - 1) {
          out += options.d;
        }       
      }

      elem.html(out);
     });

    return this;
  };

})(jQuery);


