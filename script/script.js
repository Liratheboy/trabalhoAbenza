const questao = document.getElementById("questao");
const escolhas = Array.from(document.getElementsByClassName("texto-escolha"));

let questaoAtual = {};
let aceitandoQuestoes = true;
let pontuacao = 0;
let contadorQuestao = 0;
let questoesRestantes = [];

let questoes = [
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  },
  {
    questao: "",
    escolha1: "",
    escolha2: "",
    escolha3: "",
    escolha4: "",
    escolha5: "",
    resposta: 1
  }
];