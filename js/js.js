$(function(){
  $('.volk').click(function(e){
    let width = $(window).width();
      if (width > 610){
      e.preventDefault();
    }
    $('.foto1').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/1.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    $('.foto2').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/2.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    $('.foto3').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/3.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    $('.foto4').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/4.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    $('.foto5').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/5.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    $('.foto6').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/6.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    $('.foto7').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/7.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    $('.foto8').click(function(){
      $('.often_block').css({"background-image" : "url('css/media/8.jpg')", "display" : "block"}).attr('id', 'coolt');
    });
    if (width < 610){
      $('.often_block').css({"display" : "none"});
    }
  })
  $('#circle').click(function(){
    $('.often_block').css({"display" : "none"});
  });
  $('#circle').mouseover(function(){
    $('#circle').css({'background' : 'red'});
  });
  $('#circle').mouseout(function(){
    $('#circle').css({'background' : 'white'});
  });
  function resize(){
    let width = $(window).width();
    if (width < 610){
      rr = "lol";
      $('.often_block').css({"display" : "none"});
    }
  }
  resize();
  $(window).resize(function(){
    resize();
  })
});
