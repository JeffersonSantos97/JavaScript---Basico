/* Introdução  

//console.log(this) // Pega a janela WindoW // 

function Usuario(){
    console.log(this);
}
Usuario(); // Ainda vai retornar a janela Window // 

// Como na função ñ passou o valor de this, ele herdou o do maior 

*/ 

/* Operador New 
// o this vira um objeto  

// function só com o this
function testeThis(){
    console.log(this);
}

function usuario(){
    this.name = "Jeff",
    this.idade = 24,
    this.soma = function(a,b){
        return a + b;
    }
}

 new testeThis() // testeThis {}    objeto criado com o nome testeThis

 console.log(new usuario()); // propiedades dentro do objeto 
*/ 

/* Método CALL 

// Personagem.call(o this da function, parametros da function, ...) 

function Personagem(p1, p2,p3){
    console.log(p1,p2,p3)
    console.log(this)
}
var personagemThis = {
    nome: "Jeff",
    idade: 24
}
Personagem.call(personagemThis, "parm1", 123, [5,6]);
*/

/* Método APPLY

// Mesma coisa que o call, só que com ele, eu passo os parâmetros através de um Array

// Personagem.apply(o this da Function, [parametros] ) 

function Personagem(p1, p2,p3){
    console.log(p1,p2,p3)
    console.log(this)
}
var personagemThis = {
    nome: "Jeff",
    idade: 24
}
Personagem.apply(personagemThis, ["parm1", 123, [5,6]]);
*/

/* Método BIND 

// É igual o call só que ele não ternorna uma function, ele só armazena a function
function Personagem(p1, p2,p3){
    console.log(p1,p2,p3)
    console.log(this)
}
var personagemThis = {
    nome: "Jeff",
    idade: 24
}
Personagem.bind(personagemThis," Olá ", " Mundo", "!!!!!"); // Só assim não torna nada 

var pers = Personagem.bind(personagemThis," Olá ", " Mundo", "!!!!!");

pers();
*/

/* Arrow Function 

//Forma mais rápida de passar uma função
//Tira o nome function e coloca o ( => ) pra passar uma função

var soma = (a,b) =>{
    return a + b; 
}
console.log(soma(10,10)); // 20 // 
*/ 

/* Arrow Function sem return 

//Quando cria uma arrow function que retorna algo imediatamente
// PODE, mas não é obrigatório,  proteger com o parenteses

// Function desprotejida ( sem os parenteses)
var somaD = (a,b) => a + b;
console.log(somaD(10,11)); // 21 //

// Function Protejida ( com os parenteses )
var somaP = (a,b) => (
    a + b
)
console.log(somaP(10,11)); // 25 //

// Dá a mesma coisa 

//Arrow Function com objetos 
//Nesse é obrigado passar com os parenteses, pq se não, não reconhece. 

var returnObj =  () => (
    {
        nome: "Jeff",
        idade: 24,
        cor: "Preta"
    }
)
console.log(returnObj());
*/

/* Arrow function com THIS

// Ele SEMPRE vai herdar o valor do windowns
// Mesmo que eu force com o call ou qualquer outro método, ele vai retornar o windown

var usuario = () => (
    console.log(this)
)
// This sem forçar um método
usuario(); // window // 

var objCall = {
    nome: "Jeff"
}
// Tentando mudar o This 
usuario.call(objCall); // Window// 

*/