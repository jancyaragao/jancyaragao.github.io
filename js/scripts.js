jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(300).fadeOut('slow');
    }());


    var year_now = new Date().getFullYear();
    $("#year").html(year_now);

}); // JQuery end