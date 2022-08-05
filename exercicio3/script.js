let nacionalidade = prompt('Escreva aqui a sua nacionalidade:').toLowerCase();

let nacionalidadesAceitas = ['brasileira', 'brasileiro', 'argentina', 'argentino', 'uruguaia', 'uruguaio', 'chilena', 'chileno', 'colombiana', 'colombiano'];

if (nacionalidadesAceitas.includes(nacionalidade)) {
    console.log(`Sua nacionalidade é: ${nacionalidade}`);
 }  else {
    console.log(`Nacionalidade não encontrada!`);
};






// if (nacionalidade === 'brasileira') {
//     console.log(`Sua nacionalidade é brasileira!`);
// } else if (nacionalidade === 'argentina') {
//     console.log(`Sua nacionalidade é argentina!`);
// } else if (nacionalidade === 'uruguaia') {
//     console.log(`Sua nacionalidade é uruguaia!`);
// } else if (nacionalidade === 'chilena') {
//     console.log(`Sua nacionalidade é chilena!`);
// } else if (nacionalidade === 'colombiana') {
//     console.log(`Sua nacionalidade é colombiana!`);}
//  else {
//     console.log(`Nacionalidade não encontrada!`);
// };