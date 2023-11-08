function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();

}
document.querySelector('.tecla_pom').onclick = tocaSomPom;



const ListaDeTeclas = document.querySelectorAll('.tecla');


let contador = 0;

while (contador <9) {

    ListaDeTeclas[contador].onclick = tocaSomPom;
    contador = contador + 1;
    console.log(contador);
}
while (contador <listaDeTeclas.lenght) {
const efeito = listaDeTecla[contador].classList[1]
    const idAuto = "#som_"+efeito;
listaDeTeclas[contador].onclick = function()
    }
{
tocasSom(this.idAudio);

}
contador = contador + 1;
console.log(contador);



//document.querySelector('.tecla_pom').onclick = tocaSomPom;

//document.querySelector('#som_tecla_pom').play();
//document.querySelector('.tecla_pom')

