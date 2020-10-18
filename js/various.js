(function($){
    $(function(){
      
      $('.sidenav').sidenav();
      // $('.parallax').parallax();
      $('.slider').slider();
      $('.scrollspy').scrollSpy();
      $('.tooltipped').tooltip();
  
      calulateHeaderOpacity()
  
      $(window).scroll(function(){ 
        calulateHeaderOpacity()
      }) 
      
      }); // end of document ready
    })(jQuery); // end of jQuery name space


function calulateHeaderOpacity(){
    if ($(window).height() > $(window).scrollTop()) {
      if ($(window).scrollTop() != 0) {
        headerOpacity = $(window).scrollTop() / $(window).height()
      } else {
        headerOpacity = 0
      }
      headerOpacity02 = headerOpacity * 0.2
      $('nav').css("background-color","rgba(255, 255, 255, " + headerOpacity + ")")
      $('nav').css("box-shadow","0 2px 2px 0 rgba(0, 0, 0, " + headerOpacity02 + "), 0 3px 1px -2px rgba(0, 0, 0, " + headerOpacity02 + "), 0 1px 5px 0 rgba(0, 0, 0, " + headerOpacity02 + ")") 
    } else {
      $('nav').css("background-color","rgba(255, 255, 255, 1)")
      $('nav').css("box-shadow","0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.2)") 
    }
  }