/* FUNCTION */

/* Estrutura simples

function media(n1, n2){
return (n1 + n2)/2;
}
var mediaFinal = media(7,5);
console.log('Sua media final é '+ mediaFinal) 
*/

/*Function com Arrey

function somaTotal(numeros) {
    var total = 0;
    for (num of numeros) {
        total = total + num;
    }
    return total;
}

var numerosArrey = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11];
var somaTudo = somaTotal(numerosArrey);
console.log('somaTudo resultado', somaTudo);
*/
//Corforme eu for colocando mais numeros no meu Arrey, vai aumentando mais 


/* Parâmetro REST (...)

// Ele serve pra fazer um arrey dos argumentos que ainda não foram colocados 
//  depois dos 3 pontos, coloca uma variável que vai armazer o que for colocado depois

function dados(Nome, Pais, Endereço, ...complementos){
    console.log(Nome);
    console.log(Pais);
    console.log(Endereço);
    console.log('Arrey com o dados que passaram',complemento);
}
dados('Nome Jefferson', 'Pais Brasil', 'Endereço travessa Riachuelo', 'cep 26520-590', 'cidade nilopolis', 'bairro centro' );

*/

/*  Função Autoexecutável 

// Se você colocar dois parentes no final da função e fechar tudo com outro parenteses
// Ela auto se Executa

(function escrevaOnome(){
    console.log("Meu própio nome");
}());
*/

/* Function dentro de uma variável
// Não é necessário passar o nome da função agora 
// Assim, deve-se passar apenas o nome da variável

var subtraiDoisNumeros = function subtrai(a,b){
    return a - b;
}
console.log('Resultado da Subtração: ', subtraiDoisNumeros(10,5))
*/

/* Função Anônima

//Tira o nome da função, pois não é necessária
//Apenas jogando nome da variável já é suficiente

var subtraiTresNumeros = function(a, b, c){
    return a - b - c;
}
console.log('Resultado: ',subtraiTresNumeros(15,3,2)
)
*/

/*Função Callback (NÃO ENTENDI MUITO BEM)

function somaCallback(a,b,fncallback){
    return fncallback(a+b);
}
var multiplica = function(total){
    return total * 2;
}
console.log(somaCallback (10,5,multiplica));
*/


/* Valores PADRÕES PARA OS PARÂMRETOS

// Eu posso passar valor pra caso nada seja digitado no parametro, venha o que eu deixei como padrao
//Se eu não colocar nada e passar o parametro, dá (Underfined)
// Se eu colocar um parametro, o que eu digitei que vai ser
function dados(nome = 'jefferson', idade = 25){
    console.log(nome); // Jefferson // 
    console.log(idade); // 25 // 
}
dados();

*/
