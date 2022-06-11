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
    }
    else if (selecionado.classList.contains("peixe")){

        const pratoFrango = document.querySelector(".frango");
        const pratoCarne = document.querySelector(".carne");

        pratoFrango.classList.remove("selecionado");
        pratoCarne.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if (selecionado.classList.contains("carne")){

        const pratoPeixe = document.querySelector(".peixe");
        const pratoFrango = document.querySelector(".frango");

        pratoPeixe.classList.remove("selecionado");
        pratoFrango.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if(selecionado.classList.contains("agua")){

        const pratoCoquinha = document.querySelector(".coquinha");
        const pratoPinga = document.querySelector(".pinga");

        pratoCoquinha.classList.remove("selecionado");
        pratoPinga.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if(selecionado.classList.contains("pinga")){

        const pratoCoquinha = document.querySelector(".coquinha");
        const pratoAgua = document.querySelector(".agua");

        pratoCoquinha.classList.remove("selecionado");
        pratoAgua.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if(selecionado.classList.contains("coquinha")){

        const pratoAgua = document.querySelector(".agua");
        const pratoPinga = document.querySelector(".pinga");

        pratoAgua.classList.remove("selecionado");
        pratoPinga.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if(selecionado.classList.contains("agua")){

        const pratoCoquinha = document.querySelector(".coquinha");
        const pratoPinga = document.querySelector(".pinga");

        pratoCoquinha.classList.remove("selecionado");
        pratoPinga.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if(selecionado.classList.contains("pave")){

        const pratoPacume = document.querySelector(".pacume");
        const pratoPabeber = document.querySelector(".pabeber");

        pratoPacume.classList.remove("selecionado");
        pratoPabeber.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if(selecionado.classList.contains("pacume")){

        const pratoPave = document.querySelector(".pave");
        const pratoPabeber = document.querySelector(".pabeber");

        pratoPave.classList.remove("selecionado");
        pratoPabeber.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
    else if(selecionado.classList.contains("pabeber")){

        const pratoPacume = document.querySelector(".pacume");
        const pratoPave = document.querySelector(".pabeber");

        pratoPacume.classList.remove("selecionado");
        pratoPave.classList.remove("selecionado");
        selecionado.classList.add("selecionado");
    }
}