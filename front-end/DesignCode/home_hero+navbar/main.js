'use strict';

(function ($) {
    $('.homehero_hira_set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });
})(jQuery);