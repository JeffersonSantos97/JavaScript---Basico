/*  LOOP While  
var i = 0; 
while(i < 5){
    console.log(i); 
    ++i;
} */

/* Usando o break
var i = 0
while(i < 5 ){
    if(i === 3){
        break;
    }
    console.log(i);
    ++i;
}
*/

/* Desafio PING PONG 
var i = 0
while(i < 100){
    if(i % 3 === 0 && i % 5 === 0 ){    
       // Sabemos que um numero é multiplo do outro se o resto da divisão é igua a 0 
        console.log(`${i} - PING - PONG` )
    }
    else if(i % 3 === 0){
        console.log(`${i} - Ping`);
    }
    else if(i % 5 === 0 ){
        console.log(`${i} - Pong`)
    }
    ++i;
}
*/
/* LOOP FOR 
// É igual o while só que o contador e o incremento já vem dentro

for(var i = 0; i < 9; ++i){
    console.log(` testando ${i} `)
}
*/
/*var numerosAleatorios = [3,5,10,2,19,21,13];
for(var i = 0; i < numerosAleatorios.length; ++i ){
    console.log(` ${i} - ${numerosAleatorios[i]} `)
}
for(var i = numerosAleatorios.length - 1; i >=0; i--){
    console.log(` posição ${i} com decremento: ${numerosAleatorios[i]}`);
}*/

/* Funcionalidade ( continue; )

for(var i = 0; i < 20; i++){
    if(i % 2 === 0){
        continue;
        //Toda vez que aparecer um número múltiplo de 2, ele não executa o console.log() e volta pro próximo loop 
        // Com isso, acabou imprimindo só os número impares 
    }
    console.log('utilizando continue ', i)
}
*/
/* FOR IN 
// passa a posição de cada arrey 
// é igual o length 
var arr = ["jeff", 2, 4, 6, 8, 75]
for(i in arr){
    console.log(i)
}
*/
/*  FOR OF 
// for( variável of objeto )
// A diferença entre for in e for of é que o for of passa o que está dentro do arrey e o for in passa posição no arrey 
// Essa função é uma atalho do for 
// Ela pega tudo que está dentro do arr e joga em uma variável  
// Ele pega também string 
/*var arr = [0,2,5,6,"Jeff",4,8];
for (var num of arr){
    console.log('for of ', num);
}*/

/* For dentro de For
// O de fora executa só uma vez até acabar quantas vezes a gente definiu o de dentro  
for(var i = 1; i <=5; i++){
    for(var j = 1; j <=5; j++){
        console.log(` i: ${i} j: ${j}`)
    }
}
*/

/* Desafio PING PONG (For)

for (var i = 0; i < 100; ++i ) {
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log(`${i} - PING- PONG`);
    }
    else if(i % 3 === 0){
        console.log(`${i} - PING`);
    }
    else if(i % 5 === 0 ){
        console.log(`${i} - PONG`)
    }
}
*/