$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").css({"background-color" : "black"});
        }
  
        else{
            $(".navbar").css({"background-color" : ""});  	
        }
    });
  });
  var typed =new Typed(".text",{
      strings:["Front End Developer" , "Web developer","Student"],
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 500,
      loop: true
  });