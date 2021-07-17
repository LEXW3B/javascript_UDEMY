(function(){
    //troca a classe de no-js para js
    var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

    //remove um estilo do botão
    var $btnMenu = document.querySelector('.header__btnMenu');
    $btnMenu.removeAttribute('style');
})()