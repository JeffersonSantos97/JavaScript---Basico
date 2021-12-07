/* Objetos Simples

// Um objeto se cria com chaves {}
// é como se fosse um var dentro de outra var 

var usuario = {
nome:'Jefferson',
idade: 24,
carreira: 'backend'
};

console.log(usuario);
//Essa forma imrpimi todas as propriedades que tem dentro do var 

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.carreira);
// O ponto serve pra imprimir o que tem dentro de cada propriedade individualmente

console.log(usuario['idade']);
// Uma outra forma de imprimir um objeto, mas é a menos utilizada 
*/

/* Adicionando novas propriedades

var usuario = {
    nome:'Jefferson',
    idade: 24,
    carreira: 'backend'
    };
    
    usuario.ano = 2019;
    // É só chamar a propriedade assim pra adicionar 
    
    console.log(usuario);
    console.log(usuario.ano);
*/

/* Deletando novas propriedades 

var usuario = {
    nome: 'Jefferson',
    idade: 24,
    carreira: 'backend'
};
delete usuario.nome;
// Delete é a forma de deletar um objeto
console.log(usuario);
*/

/* Outro valores para o objeto

var usuario = {
    nome: 'Jefferson',
    idade: 24,
    carreira: 'backend',
    alunos: ['Maxwell', 'Anny', 'Fernando'],
    //Arrey dentro de um objeto
    jogadores: {
        velhos: ['Neymar', 'galvão', 'Zico', 'Junior'],
        novos: ['Claudinho', 'Henrique', 'Gabriel']
    }
    // Dois objetos com arrey dentro de um objeto
};

usuario.hobbies = ['Jogar bola', 'Programar', 'Correr', 'Tenis'];
// criou um arrey dentro do objeto
console.log(usuario);

usuario.esporte = {
    terrestre: ['Volei', 'Futebol', 'Skate'],
    Aquáticos: ['Natação', 'Polo', 'Surf']
}*/

/* Adicionando Função

const usuario = {
    digaOi: function(nome){
        return `olá ${nome}`;
    }
}
console.log(usuario);
console.log(usuario.digaOi("Jefferson"));
console.log(usuario.digaOi("Juliana"));
*/

/* Adicionando função mais fácil

//Retina os dois pontos ( : ) e o ( function )

const usuario = {
    digaOi(nome){
        return `Olá ${nome}`
    }
}
console.log(usuario.digaOi('Jefferson'));
*/

/* Passando variável como valor

// Vc joga o nome de uma variável dentro de um objeto e a variável vira uma propriedade e o valor da variavel vira o valor da propriedade

const cor = "Azul";
const idade = 24;

const usuario = {
    nome: "Jefferson",
    cor, // Lá no console vai aparecer ( cor: azul)
    idade, // Lá no console vai aparecer ( idade: 24)
}
console.log(usuario);
*/

/* Merge de Objetos ( Juntar 2 ou + objetos em 1 só)

// Vai transformar dois objetos ou mais em 1 
// Usa-se o Object.assign()
// Depois eu passo os objetos que eu quero juntar  

const usuario = {
    nome: 'Jefferson',
    idade: 24,
    sexo: "masculino",

}
const infoExtra =  { 
        País: "Brasil",
        Estado: "Rio de Janeiro",
        Cidade: "Nilópolis",
}
const usuarioNovo = Object.assign({}, usuario, infoExtra);
o primeiro parâmetro é um colchete vazio {} que significa que vai vir um objeto novo
console.log(usuarioNovo);

// Quando eu quero jogar um objeto dentro do outro, eu tiro as chaves {}
Objetct.assign(usuario,infoExtra);
console.log(usuario);
//Agora o que está em infoExtra vai pra dentro do objeto usuario
// OBS: É SEMPRE MELHOR CRIAR UM OBJETO NOVO AO INVÉS DE JOGAR UM DENTRO DO OUTRO
*/

/* Merge de Objetos com spread ( forma mais simples e rápida) 

// Spread é espalhar um objeto dentro de um outro objeto
// Pra chamar um spread eu uso o 3 pontos antes do meu objeto (...)

const usuario = {
    nome: "Jefferson",
    idade: "24",
    sexo: "M"
}

const infoExtra = {
    País: "Brasil",
    Estado: "Rio de Janeiro",
    Cidade: "Nilópolis",
}

const usuarioNovo = {
    ...usuario,
    ...infoExtra,
}
console.log(usuarioNovo);
*/
