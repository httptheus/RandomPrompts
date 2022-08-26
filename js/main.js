let btnGerarPrompt = document.getElementById('btnGerarPrompt')  //Adicionando event-listener ao botão principal da página.
btnGerarPrompt.addEventListener('click', gerarPrompt)             //Adicionando event-listener ao botão principal da página.


let janelaPrompt = document.createElement('section')    //Criando elementos de janela dinamicamente.
janelaPrompt.setAttribute('id', 'janelaPrompt')

let titulo = document.createElement('h3')               //Criando elementos de janela dinamicamente.
titulo.setAttribute('id', 'tituloPrompt')

let instr = document.createElement('p')                 //Criando elementos de janela dinamicamente.
instr.setAttribute('id', 'instrucoesPrompt')

let botaoFechar = document.createElement('input')       //Criando elementos de janela dinamicamente.
botaoFechar.setAttribute('value', 'Fechar')
botaoFechar.setAttribute('id', 'btnFecharJanela')
botaoFechar.addEventListener('click', fecharJanela)

let corpoMain = document.getElementsByTagName('main')[0]

function gerarPrompt(){     //Função principal: exibe um prompt aleatório.
    numRand = 0

    while (numRand <= 0){
        numRand = parseInt(Math.random() * (5-1) + 1)
    }

    switch (numRand){
        case 1:
            titulo.innerHTML = `#001 - Calculadora`
            instr.innerHTML = `Crie uma interface de botões que permita o usuário 
            realizar cálculos.`
        break

        case 2:
            titulo.innerHTML = `#002 - Alterando cores`
            instr.innerHTML = `Crie uma interação que permita o usuário 
            alterar a cor de fundo da página para qualquer cor que ele escolher.`
        break

        case 3:
            titulo.innerHTML = `#003 - Descobrindo a idade`
            instr.innerHTML = `Construa uma interface em HTML que receba o nome 
            e idade do usuário. Devolva a informação na tela estimando o ano em que o usuário 
            nasceu, com as informações que ele colocou antes. É necessário utilizar de um dos 
            recursos do JavaScript que consegue retornar a data exata.`
        break

        case 4:
            titulo.innerHTML = `#004 - Semáforo`
            instr.innerHTML = `Considerando as três cores de um semáforo, crie uma interface 
            em que o usuário consiga selecionar uma dessas cores. Uma mensagem deve 
            aparecer dependendo do que o usuário tiver selecionado. Se o sinal selecionado for 
            vermelho, uma mensagem informando para aguardar deve ser mostrada; se for verde, a 
            mensagem mostrada permitirá o avanço e se for amarelo, a mensagem pedirá que o 
            usuário preste atenção.`
        break

        case 5:
            titulo.innerHTML = `#005 - Cadastro`
            instr.innerHTML = `Crie uma interface de cadastro que peça nome de usuário, e-mail, 
            senha e confirmação de senha. Ao cadastrar, uma mensagem no topo da página deve ser 
            mostrada confirmando o cadastro. O cadastro só será realizado se: o nome de usuário 
            não for o mesmo que a senha; campos de senha e confirmação de senha estiverem 
            incorretos e se há campos não preenchidos. Informe ao usuário através de alertas 
            toda vez que as condições para o cadastro não forem satisfeitas.`
        break
    }

    corpoMain.appendChild(janelaPrompt)
    janelaPrompt.appendChild(titulo)
    janelaPrompt.appendChild(instr)
    janelaPrompt.appendChild(botaoFechar)
}

function fecharJanela(){
    corpoMain.removeChild(janelaPrompt)
}