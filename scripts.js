const botaoConverter = document.querySelector(".botao-converter")
const selecionarMoeda = document.querySelector(".selecionar-moeda")



function converterValor (){

const inputValor = document.querySelector(".input-valor").value

const valorAconverter = document.querySelector(".valor-moedareal")

const valorConvertido = document.querySelector(".valor-moedadolar")

const dolarDia = 5.11
const euroDia = 5.47
const libraDia = 6.38
const bitcoinDia = 325.796



if(selecionarMoeda.value == "dolar"){

    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputValor / dolarDia)

}

if(selecionarMoeda.value == "euro"){

    valorConvertido.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputValor / euroDia)

}


if(selecionarMoeda.value == "libra"){

    valorConvertido.innerHTML = new Intl.NumberFormat("en-UK", {
        style: "currency",
        currency: "GBP"
    }).format(inputValor / libraDia)

}


if(selecionarMoeda.value == "bitcoin"){

    valorConvertido.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC"
    }).format(inputValor / bitcoinDia)

}


valorAconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputValor)



}





function trocarMoeda(){

    const nomeMoeda = document.querySelector(".nomemoeda-dolar")

    const moedaImagem = document.querySelector(".imagem-usa")

    if(selecionarMoeda.value == "dolar"){

        nomeMoeda.innerHTML = "Dólar Americano"

        moedaImagem.src = "./assets/estados-unidos.png"

    }

    if(selecionarMoeda.value == "euro"){

        nomeMoeda.innerHTML = "Euro"

        moedaImagem.src = "./assets/euro.png"

    }
    

    if(selecionarMoeda.value == "libra"){

        nomeMoeda.innerHTML = "Libra"

        moedaImagem.src = "./assets/libra.png"

    }


    if(selecionarMoeda.value == "bitcoin"){

        nomeMoeda.innerHTML = "Bitcoin"

        moedaImagem.src = "./assets/bitcoin.png"

    }



    converterValor ()
    

}







selecionarMoeda.addEventListener("change", trocarMoeda)
botaoConverter.addEventListener("click", converterValor)