$(window).on('scroll',function(){
  var headerXPosition = Math.min(Math.round($(window).scrollTop()/15), 3);
  console.log(headerXPosition);
  $('.actionDiv').css('transform','translateX('+(headerXPosition)+'rem)');
});