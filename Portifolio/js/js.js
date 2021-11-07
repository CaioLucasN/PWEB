
const barras = document.querySelectorAll(".barra");

window.addEventListener('scroll', (e) => {
  ativarBarra(barras);
});

function ativarBarra(barras) {
  const pag = document.getElementById("bod"); //Pega a Pagina
  const alturaPag = pag.clientHeight; //Pega altura da Pagina
  const distscr = document.getElementById("distscr"); //Pega a altura até o quadro Habilidades
  const alturaScroll = alturaPag - distscr.clientHeight;

//Calcula a distancia do scroll até o quadro habilidades, subtraindo
// a altura até o mesmo da altura total

  if (document.body.scrollTop > alturaScroll ||
      document.documentElement.scrollTop > alturaScroll) {
    barras[0].style.paddingRight = "60%";
    barras[0].style.transition = "1.5s";
    barras[0].style.transitionTimingFunction = "ease-in-out";
    barras[1].style.paddingRight = "57%";
    barras[1].style.transition = "1.5s";
    barras[1].style.transitionTimingFunction = "ease-in-out";
    barras[1].style.transitionDelay = "0.5s";
    barras[2].style.paddingRight = "32%";
    barras[2].style.transition = "1.5s";
    barras[2].style.transitionTimingFunction = "ease-in-out";
    barras[2].style.transitionDelay = "1s";
    barras[3].style.paddingRight = "20%";
    barras[3].style.transition = "1.5s";
    barras[3].style.transitionTimingFunction = "ease-in-out";
    barras[3].style.transitionDelay = "1.5s";
    barras[4].style.paddingRight = "40%";
    barras[4].style.transition = "1.5s";
    barras[4].style.transitionTimingFunction = "ease-in-out";
    barras[4].style.transitionDelay = "2s";
    barras[5].style.paddingRight = "25%";
    barras[5].style.transition = "1.5s";
    barras[5].style.transitionTimingFunction = "ease-in-out";
    barras[5].style.transitionDelay = "2.5s";
  }
}
