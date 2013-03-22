/// <reference path="jqueryui.d.ts" />

var colors : string[] = new Array("#a99", "#9a9", "#99a");

function getColor() : string {
    var index = Math.floor(Math.random() * 3);

    return colors[index];
}

$(() => {
    var hovering = false;

    $(".grey").mouseenter(x => {
        var color = getColor();

        if(!hovering) {
            hovering = true;
            $(x.currentTarget).animate({
               backgroundColor: color
            }, 100);

            $(".grey").animate( {
                backgroundColor: color
            }, 1250);
        }
    });

    $("#cb").mouseleave(x => {

        hovering = false;

        $(".grey").animate({
            backgroundColor: "#aaa"
        }, 250 );

    });

});


