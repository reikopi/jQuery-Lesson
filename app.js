$(function(){
// 赤色の正方形を上から下へスライド
  $('.box1').slideDown(function (){
//   青色の長方形を表示
   $('.box1').css({
       'background-color': '#0000FF',
        'width': '200px',
        'height': '100px'
// 下から上へスライド
   }).slideUp();
  });
});