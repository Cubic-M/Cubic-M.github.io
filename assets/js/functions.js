$( document ).ready(function() {

  set_descriptionbox_size();
  scroller();

});

function move_to($offset){
$('.container-to-scroll').css('margin-left',$offset);
}

function set_descriptionbox_size(){
$('#description-box').css('width','400%');
$('.topic-holder').css('width','25%');
}

function scroller(){
  var $root = $('html, body');
$('a[href*=#]').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function () {
        window.location.hash = href;
    });
    return false;
});
}
