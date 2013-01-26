(function($) {
    jQuery.fn.typeText = function() {

        var strValue = $(this).text();
        var parseItLetter = strValue.split('');
        var letterArray = [];
        $(this).empty();
      
        for (i = 0; i < parseItLetter.length; i++) {
            letterArray += parseItLetter[i];
        }
      var i = 0, l = letterArray.length;
      function f() {
        $('.typeText').append(letterArray[i]);
        i++;
        if( i < l ){
          setTimeout( f, 50 );
        }
      }
      f();
    };
})(jQuery);

$('.typeText').typeText();