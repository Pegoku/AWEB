$(window).on('scroll',function(){
  var headerXPosition = Math.min(Math.round($(window).scrollTop()/20), 6);
  console.log(headerXPosition);
  $('.actionDiv').css('transform','translateX('+(headerXPosition)+'%)');
});