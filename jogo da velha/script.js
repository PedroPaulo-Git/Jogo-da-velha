
const jogo = window.document.querySelectorAll('.box')


jogo.forEach(bloco =>{
bloco.addEventListener('click',() =>
{
if(!bloco.textContent){
    bloco.textContent= 'X';
    verificarvitoria('X');
}else if (bloco.textContent ==='X'){
    bloco.textContent = 'O';
    verificarvitoria('O');
} else{
    bloco.textContent = ''
}
})

});
function verificarvitoria (jogador) {
    for (let i= 0; i <= 6; i += 3){
        if(jogo[i].textContent === jogador &&
            jogo[i + 1].textContent === jogador &&
            jogo [i+2].textContent === jogador){
                alert('jogador venceu');
                reiniciarJogo();
                return;
            }
    }
    if(jogo[0].textContent === jogador &&
        jogo[4].textContent === jogador &&
        jogo[8].textContent ===jogador){
            alert('Jogador venceu')
            reiniciarJogo();
            return;
        }
    
    if(jogo[2].textContent === jogador &&
        jogo[4].textContent === jogador &&
        jogo[6].textContent === jogador){
            alert('Jogador venceu');
            reiniciarJogo();
            return;
        }
   

    }
 function reiniciarJogo(){
    
        jogo.forEach(bloco => {
          bloco.textContent = '';
        });
}
