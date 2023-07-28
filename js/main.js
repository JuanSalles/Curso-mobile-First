
let iconeAtivo1 = document.querySelector('#pagina-1');
let iconeAtivo2 = document.querySelector('#pagina-5');

const corAtiva = "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"
const corInativa = "#C4C4C4";

const carrossel1 = document.querySelector("#galeria-grande-1");
const carrossel2 = document.querySelector("#galeria-grande-2");
const sectionCarrossel = document.querySelector("#container-carrosel")

iconeAtivo1.style.background = corAtiva;
iconeAtivo2.style.background = corAtiva;

carrossel1.addEventListener("scroll", evento => mudarCorCarrossel(evento.target));
carrossel2.addEventListener("scroll", evento => mudarCorCarrossel(evento.target));

sectionCarrossel.addEventListener("click", element => {

    switch(element.target.id){
        case "botao-left1":
            carrossel1.scrollLeft -= 266;
            break;
        case "botao-right1":
            carrossel1.scrollLeft += 266;
            break;
        case "botao-left2":
            carrossel2.scrollLeft -= 266;
            break;
        case "botao-right2":
            carrossel2.scrollLeft += 266;
            break;
    }
});

function mudarCorCarrossel (element) {

    let tamanhoDoScroll;
    let pagina1;
    let pagina2;
    let pagina3;
    let pagina4;

    let posicaoDoScroll = element.scrollLeft;
    let tamanhoDaTela = document.querySelector('#galeria1').clientWidth;
    
    if(element.id == "galeria-grande-1"){
        tamanhoDoScroll = carrossel1.scrollWidth;
        pagina1 = document.querySelector('#pagina-1');
        pagina2 = document.querySelector('#pagina-2');
        pagina3 = document.querySelector('#pagina-3');
        pagina4 = document.querySelector('#pagina-4');
    }else{
        tamanhoDoScroll = carrossel2.scrollWidth;
        pagina1 = document.querySelector('#pagina-5');
        pagina2 = document.querySelector('#pagina-6');
        pagina3 = document.querySelector('#pagina-7');
        pagina4 = document.querySelector('#pagina-8');
    }

    let FimDoscroll = tamanhoDoScroll - tamanhoDaTela;
    
    if (posicaoDoScroll == (0)){
        ativarIcone(pagina1, element.id);
    }else if(posicaoDoScroll <= (FimDoscroll*2.5/4)) {
        ativarIcone(pagina2, element.id);
    }else if(posicaoDoScroll < (FimDoscroll)){
        ativarIcone(pagina3, element.id);
    }else{
        ativarIcone(pagina4, element.id);
    }
}

function ativarIcone (proximoIcone, id){
    if (id == "galeria-grande-1"){
        if(iconeAtivo1 != proximoIcone){
            iconeAtivo1.style.background = corInativa;
            proximoIcone.style.background = corAtiva;
        }
        iconeAtivo1 = proximoIcone;
    }else{
        if(iconeAtivo2 != proximoIcone){
            iconeAtivo2.style.background = corInativa;
            proximoIcone.style.background = corAtiva;
        }
        iconeAtivo2 = proximoIcone;
    }
    return;
}
