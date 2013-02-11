(function ($) {
    jQuery.fn.typeText = function (options) {

        var strValue = $(this).text();
        var parseItLetter = strValue.split('');
        var letterArray = [];
        $(this).empty();

        var settings = $.extend({
            type: 'random',
            speed: 50
        }, options);

        if (settings.type == 'random') {
            for (i = 0; i < parseItLetter.length; i++) {
                letterArray.push('<span class="opaque">' + parseItLetter[i] + '</span>');
            }
            $('.typeText').append(letterArray);

            function fRan() {
                var remClass = $('.typeText span');
                var randomNum = Math.floor((Math.random() * remClass.length));
                var j = randomNum;

                if (remClass.hasClass('opaque')) {
                    $('.typeText span:eq(' + j + ')').removeClass('opaque');
                    j++;
                    setTimeout(fRan, settings.speed);
                }
            }
            fRan();
        }
        if (settings.type == 'linear') {
            for (i = 0; i < parseItLetter.length; i++) {
                letterArray.push(parseItLetter[i]);
            }
            var i = 0,
                l = letterArray.length;

            function fLin() {
                $('.typeText').append(letterArray[i]);
                i++;
                if (i < l) {
                    setTimeout(fLin, settings.speed);
                }
            }
            fLin();
        }
    };
})(jQuery);

$('.typeText').typeText({
    type: 'random',
    speed: 25
});