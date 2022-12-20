$(function(){
  // button要素がクリックされたときに、処理を実行
  $('button').on('click', function(){
  // ul要素の子要素、li要素を全て取得する
    $('ul').children().css('color','red');
  });
});