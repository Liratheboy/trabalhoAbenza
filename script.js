let questaoAtual = 0;
let acertos = 0;

let respostaCerta = [4, 1, 5, 3, 2, 2, 4, 5, 3, 2];
let pergunta = [];
let escolhidas = [];

pergunta[0] = "1) Para utilizamos a função srand(), precisamos incluir a biblioteca:";
pergunta[1] = "2) Resumidamente, o que é uma função?";
pergunta[2] = "3) Quantos espaços a seguinte matriz apresenta: int matriz[10][10]; ?";
pergunta[3] = "4) Como podemos selecionar elementos por meio de classes e id's respectivamente?";
pergunta[4] = "5) HTML é uma linguagem de ... ?";
pergunta[5] = "6) \"For\" é uma estrutura de repetição controlada por ?";
pergunta[6] = "7) No javascript, o que a função recebe entre os parênteses?";
pergunta[7] = "8) CSS é uma linguagem de ...";
pergunta[8] = "9) \"Const\" tem esse nome porque o valor atribuído é...";
pergunta[9] = "10) O que o método \"appendChild\" faz?";


let altA = [];

altA[0] = "A) include time.h";
altA[1] = "A) Um bloco de código que executa algo";
altA[2] = "A) 10";
altA[3] = "A) \"#\" e \".\"";
altA[4] = "A) Estilização";
altA[5] = "A) Variável";
altA[6] = "A) Objetos";
altA[7] = "A) Marcação";
altA[8] = "A) Nulo";
altA[9] = "A) Remove o nó especifico";


let altB = [];

altB[0] = "B) include <math.h>";
altB[1] = "B) Uma biblioteca";
altB[2] = "B) 0";
altB[3] = "B) \"#\" e \"*\"";
altB[4] = "B) Marcação";
altB[5] = "B) Contador";
altB[6] = "B) Paramêtros";
altB[7] = "B) Programação";
altB[8] = "B) Variável";
altB[9] = "B) Adiciona um nó ao final da lista de filhos de um nó pai especificado.";


let altC = [];

altC[0] = "C) include <string.h>";
altC[1] = "C) Uma linguagem de programação";
altC[2] = "C) 1000";
altC[3] = "C) \".\" e \"#\"";
altC[4] = "C) Programação";
altC[5] = "C) Indexador";
altC[6] = "C) Classes";
altC[7] = "C) Amor";
altC[8] = "C) Constante";
altC[9] = "C) Cria uma função";


let altD = [];

altD[0] = "D) include <time.h>";
altD[1] = "D) Um laço de repetição";
altD[2] = "D) 1";
altD[3] = "D) \"%\" e \"!\"";
altD[4] = "D) Banco de Dados";
altD[5] = "D) Funções";
altD[6] = "D) Argumentos";
altD[7] = "D) Banco de Dados";
altD[8] = "D) Zero";
altD[9] = "D) Adiciona uma repetição";


let altE = [];

altE[0] = "E) include <ctype.h>";
altE[1] = "E) Um tipo de variável";
altE[2] = "E) 100";
altE[3] = "E) \"+\" e \"=\"";
altE[4] = "E) Sinais";
altE[5] = "E) Objetos";
altE[6] = "E) Nada";
altE[7] = "E) Estilização";
altE[8] = "E) Nenhuma das alternativas";
altE[9] = "E) Nenhuma das alternativas";

function next() {

    document.getElementById("alt1").classList.remove("hide");
    document.getElementById("alt2").classList.remove("hide");
    document.getElementById("alt3").classList.remove("hide");
    document.getElementById("alt4").classList.remove("hide");
    document.getElementById("alt5").classList.remove("hide");

    if(questaoAtual == 0){

        document.querySelector("#elementos").classList.remove("hide");
        escolhidas = [];
        acertos = 0;
    }

    if(questaoAtual == 10){

        passar.innerText = "Recomeçar";

        let funAcertos = verAcertos();

        questao.innerText = "Você acertou " + funAcertos + "/10 questões";

        document.querySelector("#elementos").classList.add("hide");

        questaoAtual = 0;
    }

    else{

    removerResposta();
           
    passar.innerText = "Próxima pergunta";

    alt1.disabled = false;
    alt2.disabled = false;
    alt3.disabled = false;
    alt4.disabled = false;
    alt5.disabled = false;    

    questao.innerText = pergunta[questaoAtual];
    alt1.innerText = altA[questaoAtual];
    alt2.innerText = altB[questaoAtual];
    alt3.innerText = altC[questaoAtual];
    alt4.innerText = altD[questaoAtual];
    alt5.innerText = altE[questaoAtual];

    questaoAtual += 1;

    }
}

function resposta(alternativa) {

    escolhidas.push(alternativa); 

    alt1.disabled = true;
    alt2.disabled = true;
    alt3.disabled = true;
    alt4.disabled = true;
    alt5.disabled = true;

    verResposta();
}

function verAcertos(){
    for(let i = 0; i < 10; i++){
        if(escolhidas[i] == respostaCerta[i])
            acertos++;
    }

    if(acertos == undefined)
        acertos = 0;

    return acertos;
}

function verResposta(){

    if(questaoAtual == 1)
        document.querySelector("#alt4").classList.add("acertou");

    else if(questaoAtual == 2)
        document.querySelector("#alt1").classList.add("acertou");
    
    else if(questaoAtual == 3)
        document.querySelector("#alt5").classList.add("acertou");

    else if(questaoAtual == 4)
        document.querySelector("#alt3").classList.add("acertou");

    else if(questaoAtual == 5)
        document.querySelector("#alt2").classList.add("acertou");
    
    else if(questaoAtual == 6)
        document.querySelector("#alt2").classList.add("acertou");
    
    else if(questaoAtual == 7)
        document.querySelector("#alt4").classList.add("acertou");

    else if(questaoAtual == 8)
        document.querySelector("#alt5").classList.add("acertou");

    else if(questaoAtual == 9)
        document.querySelector("#alt3").classList.add("acertou");

    else if(questaoAtual == 10)
        document.querySelector("#alt2").classList.add("acertou");
}

function removerResposta(){

    if(questaoAtual == 1)
        document.querySelector("#alt4").classList.remove("acertou");

    else if(questaoAtual == 2)
        document.querySelector("#alt1").classList.remove("acertou");

    else if(questaoAtual == 3)
        document.querySelector("#alt5").classList.remove("acertou");

    else if(questaoAtual == 4)
        document.querySelector("#alt3").classList.remove("acertou");

    else if(questaoAtual == 5)
        document.querySelector("#alt2").classList.remove("acertou");

    else if(questaoAtual == 6)
        document.querySelector("#alt2").classList.remove("acertou");

    else if(questaoAtual == 7)
        document.querySelector("#alt4").classList.remove("acertou");

    else if(questaoAtual == 8)
        document.querySelector("#alt5").classList.remove("acertou");

    else if(questaoAtual == 9)
        document.querySelector("#alt3").classList.remove("acertou");

    else if(questaoAtual == 0)
        document.querySelector("#alt2").classList.remove("acertou");
}


