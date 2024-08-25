document.addEventListener('DOMContentLoaded', function() {
    const titulo = document.getElementById('titulo');
    const playButton = document.getElementById('playButton');
    const mensagem = document.getElementById('mensagem');
    const audio = document.getElementById('audio');

    // Transição do título
    setTimeout(function() {        
        titulo.classList.add('sair');

        // Mostrar o botão após a transição do título
        setTimeout(function() {
            console.log('Botão deve aparecer agora');  // Log para depuração
            playButton.classList.add('mostrar');
        }, 1000); // Tempo igual ao da transição do título
    }, 4000);

    // Evento de clique no botão
    playButton.addEventListener('click', function() {
        console.log('Botão clicado, música começa a tocar');  // Log para depuração
        audio.play();
        mensagem.classList.add('mostrar');
        playButton.classList.add('none');
    });
});
