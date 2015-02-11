/**
 * Created by whitehawk on 2014-04-04.
 */

$(document).ready(function(){
    //global ref to cube
    var cube = $('#cube')

    $(document).on('click', function(e) {

        var y = e.pageY;
        var x = e.pageX;

        cube.css('left',x+'px');
        cube.css('top',y+'px');

    });

});
