document.addEventListener('DOMContentLoaded', function() {
    var audio01 = document.getElementById('audio01')
    var musica01 = document.getElementById('musica1')
    var textoM01 = musica01.innerHTML

    var isPlaying = false;

    musica01.addEventListener("click", function() {
        
        if (isPlaying) {
            // Se o áudio estiver tocando, pausa-o
            audio01.pause();
            isPlaying = false;
            musica01.textContent = textoM01;
          } else {
            var confirmar = confirm('Deseja tocar a musica ?')
            if (confirmar) {
                audio01.play();
                isPlaying = true;
                musica01.textContent = "Clique aqui para pausar o áudio";
            }
           
          }
      });
});
