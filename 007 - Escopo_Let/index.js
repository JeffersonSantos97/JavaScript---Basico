/* Escopo global
// Ela fica no Window e fica disponível pra todo lugar no código

var nome = "Jeff";

// nome pode ser impresso aqui e dentro de uma functio também
console.log(nome); // Jeff //

// nome pode ser imrpesso também dentro de uma function
function imprimeNome(){
    console.log(nome); // Jeff //

}
imprimeNome();
*/

/* Escopo Local 

// São variáveis acessives apenas dentro de uma função ou uma caixa 

function imprimeIdade(){
    var idade = 24;
    console.log(idade);
}
// Como a variável IDADE foi criada dentro de uma function, ela só retorna ali dentro
 imprimeIdade(); // 24// 

 // Se eu tentar dar um console.log fora, vai dar undefined 

//console.log(idade); // idade is not defined //
 
// Escopo Local sem o Var

// O escopo local sem o var funciona como se fosse um escopo global
//Se eu não definir uma variável, ela armazena no window ( escopo global)

function imprimePais(){
    pais = "Brasil"
    console.log(pais)
}

// Imprime no escopo Local
imprimePais(); // Brasil //  

// Imprime também do lado de fora da Function
console.log(pais) // Brasil// 

*/ 

/* Escopo Dinâmico*/ 
// Não recomendado o uso, pq pode deixar o código perdeido 

function imprimeThis(){
    console.log(this)
}
function imprimeMenssagem(){
    console.log(imprimeThis.call(imprimeThis));
}