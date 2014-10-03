/**
 * Created by imason on 9/24/14.
 */

$(function () {

    var active = true;

    $('#accordion_expand_all').click(function () {
        if (active) {
            active = false;
            $('.panel-collapse').collapse('show');
            $('.panel-title').attr('data-toggle', '');

        }
    });

    $('#accordion_collapse_all').click(function () {
         {
            active = true;
            $('.panel-collapse').collapse('hide');
            $('.panel-title').attr('data-toggle', 'collapse');

        }
    });



});


