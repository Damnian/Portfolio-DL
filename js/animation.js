//przycisk menu
var nav_container= document.querySelector('.nav-container');
var menu = document.querySelector('.menu');
var menuButton = document.querySelector('.menu-toggle');
  menuButton.addEventListener('click', function () {
  nav_container.classList.toggle('visible');
  menu.classList.toggle('visible');
  menuButton.classList.toggle('closed');
},false);



//scrolling do sekcji
$('a[href^=#]').click(function(){
    event.preventDefault();
    var target = $(this).attr('href');
    if (target == '#')
      $('html, body').animate({scrollTop : 0}, 600);
    else
      $('html, body').animate({
        scrollTop: $(target).offset().top - 100
    }, 600);

});
