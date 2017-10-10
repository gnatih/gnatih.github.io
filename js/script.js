$(function (){
  $('.item').click(function (e){
    e.preventDefault();
    var href = $(this).data('href');

    window.open(href);

  });
});
