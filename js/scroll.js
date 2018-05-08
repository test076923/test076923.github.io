$(document).ready(function() {
  $('#movetopbt').bind('click', function() {
    $('html').animate({scrollTop: '0'}, 680);
  });
  // 애니메이션 효과로 자연스럽게 이동됨, 0.68초

  $('#movetopbt').on('click', function() {
    $('html').scrollTop('0');
  });
  // 애니메이션 효과없이 즉시 해당 위치 0 지점으로 이동함
});
