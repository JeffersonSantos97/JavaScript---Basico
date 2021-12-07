/* Destructuring  

//Pegar  um objeto e colocar 
//dentro de uma propriedade

 
let usuario = {
    nome: "Jefferson",
    sobrenome: "Santos",
    idade: 16
}
*/
 /*Jeito tradicional 
var nome = usuario.nome;
console.log("jeito traicional", nome); // Jefferson

// Jeito fácil
var { idade } = usuario;
console.log("Jeito fácil" , idade); // 16 
// Posso pedir mais de umn entre o colchetes 

var {nome,sobrenome}= usuario;
console.log(nome, sobrenome); // jefferson Santos // 
// Outra forma de Destructuring 

var {nome: outroNome} = usuario;
console.log(outroNome); // Jefferson // 
console.log(nome); // nome is not definido // 

// pq passou outra vaiável, ele não armazena no "nome"

// Pegou o valor dentro de nome, só que 
//ao invés de criar uma variável nome e adicionar o elementro dentro de nome
// Ele só pega o elemento dentro de nome e passa uma nova variável
*/

/*   Destructuring nested 
// Pega um objeto dentro de outro objeto

var usuario = {
    nome: {
        primeiro:"Jefferson",
        ultimo: "da Costa"
    }
} 
//var {nome: {primeiro}} = usuario;
//console.log(primeiro) // "Jefferson" // 
// O primeiro sempre tem que ser o objeto raiz( primeiro)
*/

/* Destructuring com default value 

// Ele passa uma um elemento pra caso não tenha nehuma variável com um elemento

 var usuario2 = {
    nome: {
        primeiro: "Jeff",
        lest: "da Costa",
        time: "flamengo"
    }
}
//Caso1

var {nome:{time = "vasco"}} = usuario2; 
console.log(time); // vasco // 
//Volta esse resultado antes de criar um objeto no (usuario2)

//Caso2

var {nome:{time}} = usuario2;
console.log(time); // Flamengo//
//Se já tiveru um onjeto criado, ele sempre retorna o criado dentro do objeto raiz
*/ 

/* Desctruturing como parâmetro de function*/ 
