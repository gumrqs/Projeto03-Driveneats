let comidaSelecionada = false;
let bebidaSelecionada = false;
let sobremesaSelecionada = false;
let nomeComidaEscolhida;
let nomeBebidaEscolhida;
let nomeSobremesaEscolhida;
let precoComidaEscolhida;
let precoBebidaEscolhida;
let precoSobremesaEscolhida;

function verificarBotao(){
    if(comidaSelecionada == true && bebidaSelecionada == true && sobremesaSelecionada == true){
        const botaoFinalizar = document.querySelector(".fecharpedido");
        botaoFinalizar.classList.add("botao-liberado");
        botaoFinalizar.disabled=false;
        botaoFinalizar.innerHTML="Fechar Pedido";
    }
}

function selecionar(elemento){
    const selecionado = elemento;
    // primeiro passo é verificar qual pra to é 
    // fica com a borda verde e as outras ficam branca 
    if(selecionado.classList.contains("frango")){

        const pratoPeixe = document.querySelector(".peixe");
        const pratoCarne = document.querySelector(".carne");

        pratoPeixe.classList.remove("selecionado");
        pratoCarne.classList.remove("selecionado");
        selecionado.classList.add("selecionado");

        comidaSelecionada = true;
        nomeComidaEscolhida = `Frango`;
        precoComidaEscolhida = 21.50;


    }
    else if (selecionado.classList.contains("peixe")){

        const pratoFrango = document.querySelector(".frango");
        const pratoCarne = document.querySelector(".carne");

        pratoFrango.classList.remove("selecionado");
        pratoCarne.classList.remove("selecionado");
        selecionado.classList.add("selecionado");

        comidaSelecionada = true;
        nomeComidaEscolhida = `Peixe`;
        precoComidaEscolhida = 25;
    }
    else if (selecionado.classList.contains("carne")){

        const pratoPeixe = document.querySelector(".peixe");
        const pratoFrango = document.querySelector(".frango");

        pratoPeixe.classList.remove("selecionado");
        pratoFrango.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
        
        comidaSelecionada = true;
        nomeComidaEscolhida = `Carne`;
        precoComidaEscolhida = 27.75;
    }
    else if(selecionado.classList.contains("agua")){

        const pratoCoquinha = document.querySelector(".coquinha");
        const pratoPinga = document.querySelector(".pinga");

        pratoCoquinha.classList.remove("selecionado");
        pratoPinga.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
        
        bebidaSelecionada = true;
        nomeBebidaEscolhida = "Agua";
        precoBebidaEscolhida = 8.90;
    }
    else if(selecionado.classList.contains("pinga")){

        const pratoCoquinha = document.querySelector(".coquinha");
        const pratoAgua = document.querySelector(".agua");

        pratoCoquinha.classList.remove("selecionado");
        pratoAgua.classList.remove("selecionado");
        selecionado.classList.add("selecionado");

        bebidaSelecionada = true;
        nomeBebidaEscolhida = "Pinga";
        precoBebidaEscolhida = 7.50;
    }
    else if(selecionado.classList.contains("coquinha")){

        const pratoAgua = document.querySelector(".agua");
        const pratoPinga = document.querySelector(".pinga");

        pratoAgua.classList.remove("selecionado");
        pratoPinga.classList.remove("selecionado");
        selecionado.classList.add("selecionado");

        bebidaSelecionada = true;
        nomeBebidaEscolhida = "Coquinha";
        precoBebidaEscolhida = 12;
    }
    
    else if(selecionado.classList.contains("pave")){

        const pratoPacume = document.querySelector(".pacume");
        const pratoPabeber = document.querySelector(".pabeber");

        pratoPacume.classList.remove("selecionado");
        pratoPabeber.classList.remove("selecionado");
        selecionado.classList.add("selecionado");

        sobremesaSelecionada = true;
        nomeSobremesaEscolhida = "Pave";
        precoSobremesaEscolhida = 14.90;
    }
    else if(selecionado.classList.contains("pacume")){

        const pratoPave = document.querySelector(".pave");
        const pratoPabeber = document.querySelector(".pabeber");

        pratoPave.classList.remove("selecionado");
        pratoPabeber.classList.remove("selecionado");
        selecionado.classList.add("selecionado");

        sobremesaSelecionada = true;
        nomeSobremesaEscolhida = "Pacume";
        precoSobremesaEscolhida = 20.50;
    }
    else if(selecionado.classList.contains("pabeber")){

        const pratoPacume = document.querySelector(".pacume");
        const pratoPave = document.querySelector(".pave");

        pratoPacume.classList.remove("selecionado");
        pratoPave.classList.remove("selecionado");
        selecionado.classList.add("selecionado");

        sobremesaSelecionada = true;
        nomeSobremesaEscolhida = "Pabeber";
        precoSobremesaEscolhida = 9.60;
    }
    verificarBotao();

}
function finalizarPedido(){
    const somaPedidos = precoComidaEscolhida + precoBebidaEscolhida + precoSobremesaEscolhida;
    const mensagem = `Olá, gostaria de fazer o pedido:
                    - Prato: ${nomeComidaEscolhida}
                    - Bebida: ${nomeBebidaEscolhida}
                    - Sobremesa: ${nomeSobremesaEscolhida}
                    Total: R$ ${somaPedidos.toFixed(2)}`;
    
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/553193125598?text=${mensagemCodificada}`);

}