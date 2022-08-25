let btnGerarPrompt = document.getElementById('btnGerarPrompt')  //Adicionando event-listener ao botão principal da página.
btnGerarPrompt.addEventListener('click', gerarPrompt)             //Adicionando event-listener ao botão principal da página.


let janelaPrompt = document.createElement('section')    //Criando elementos de janela dinamicamente.
janelaPrompt.setAttribute('id', 'janelaPrompt')

let titulo = document.createElement('h3')               //Criando elementos de janela dinamicamente.
titulo.setAttribute('id', 'tituloPrompt')

let instr = document.createElement('p')                 //Criando elementos de janela dinamicamente.
instr.setAttribute('id', 'instrucoesPrompt')

let botaoFechar = document.createElement('input')
botaoFechar.setAttribute('value', 'Fechar')
botaoFechar.setAttribute('id', 'btnFecharJanela')
botaoFechar.addEventListener('click', fecharJanela)

function gerarPrompt(){     //Função principal: exibe um prompt aleatório.
    numRand = 0

    while (numRand <= 0){
        numRand = parseInt(Math.random() * (5-1) + 1)
    }
}

function fecharJanela(){

}