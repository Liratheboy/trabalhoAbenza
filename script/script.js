const questao = document.getElementById("questao");
const escolhas = Array.from(document.getElementsByClassName("texto-escolha"));

let questaoAtual = {};
let aceitandoQuestoes = true;
let pontuacao = 0;
let contadorQuestao = 0;
let questoesRestantes = [];

let questoes = [
  {
    questao: "Para utilizamos a função srand(), precisamos incluir a biblioteca:",
    escolha1: "include time.h",
    escolha2: "include <math.h>",
    escolha3: "include <string.h>",
    escolha4: "include <time.h>",
    escolha5: "include <ctype.h>",
    resposta: 4
  },
  {
    questao: "Resumidamente, o que é uma função?",
    escolha1: "Um bloco de código que executa algo",
    escolha2: "Uma biblioteca",
    escolha3: "Uma linguagem de programação",
    escolha4: "Um laço de repetição",
    escolha5: "Um tipo de variável",
    resposta: 1
  },
  {
    questao: "Quantos espaços a seguinte matriz apresenta: int matriz[10][10]; ?",
    escolha1: "10",
    escolha2: "0",
    escolha3: "1000",
    escolha4: "1",
    escolha5: "100",
    resposta: 5
  },
  {
    questao: "Como podemos selecionar elementos por meio de classes e id´s respectivamente?",
    escolha1: ""#" e "."",
    escolha2: ""#" e "*"",
    escolha3: ""." e "#"",
    escolha4: ""%" e "!"",
    escolha5: ""+" e "="",
    resposta: 3
  },
  {
    questao: "HTML é uma linguagem de ... ?",
    escolha1: "Estilização",
    escolha2: "Marcação",
    escolha3: "Programação",
    escolha4: "Banco de Dados",
    escolha5: "Sinais",
    resposta: 2
  },
  {
    questao: ""For" é uma estrutura de repetição controlada por ?",
    escolha1: "Variável",
    escolha2: "Contador",
    escolha3: "Indexador",
    escolha4: "Funções",
    escolha5: "Objetos",
    resposta: 2
  },
  {
    questao: "No javascript, o que a função recebe entre os parênteses?",
    escolha1: "Objetos",
    escolha2: "Paramêtros",
    escolha3: "Classes",
    escolha4: "Argumentos",
    escolha5: "Nada",
    resposta: 4
  },
  {
    questao: "CSS é uma linguagem de ...",
    escolha1: "Marcação",
    escolha2: "Programação",
    escolha3: "Amor",
    escolha4: "Banco de Dados",
    escolha5: "Estilização",
    resposta: 5
  },
  {
    questao: ""Const" tem esse nome porque o valor atribuído é...",
    escolha1: "Nulo",
    escolha2: "Variável",
    escolha3: "Constante",
    escolha4: "Zero",
    escolha5: "Nenhuma das alternativas",
    resposta: 3
  },
  {
    questao: "O que o método "appendChild" faz?",
    escolha1: "Remove o nó especifico",
    escolha2: "Adiciona um nó ao final da lista de filhos de um nó pai especificado.",
    escolha3: "Cria uma função",
    escolha4: "Adiciona uma repetição",
    escolha5: "Nenhuma das alternativas",
    resposta: 2
  }
];