(function(){
    var $html = document.querySelector('html');
    var $btn  = document.querySelector('.header-nav__hamburgger');

    $html.classList.remove('no-js');
    $html.classList.add('menu-opened');

    $btn.addEventListener('click', function(){
        $html.classList.toggle('menu-opened');
    })
})()