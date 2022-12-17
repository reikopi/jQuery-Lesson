// $(function(){
// // 赤色の正方形を上から下へスライド
//   $('.box1').slideDown(function (){
// //   青色の長方形を表示
//   $('.box1').css({
//       'background-color': '#0000FF',
//         'width': '200px',
//         'height': '100px'
// // 下から上へスライド
//   }).slideUp();
//   });
// });


// // マウスオーバーイベントの設定
// $(function(){
//   $('.box2').mouseover(function(){
//     $('.box2').css({'background-color': '#0000FF'});
//   });
//   $('.box2').mouseout(function(){
//     $('.box2').css({'background-color':'#FF0000'});
//   });
// });

// クラス属性でマウスオーバーとアウトをする
// $(function(){
//   $('.box2').mouseover(function(){
//     $('.box2').addClass('box2-ext');
//   });
//   $('.box2').mouseout(function(){
//     $('.box2').removeClass('box2-ext');
//   });
// });

// マウスクリックイベントを作成
$(function(){
  $('.box2').on('click',function(){
    $('.box2').addClass('box2-ext')
  });
  $('.box2').mouseout(function(){
    $('.box2').removeClass('box2-ext');
  });
});