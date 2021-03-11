let pets = [
    { nome:'Harry', especie: 'cão', sexo: 'M', peso: 5.5, idade: 2},
    { nome:'Rony', especie: 'gato', sexo: 'M', peso: 3.5, idade: 5},
    { nome:'Hermione', especie: 'tartaruga', sexo: 'F', peso: 12, idade: 103},
    { nome:'Sirius', especie: 'cão', sexo: 'M', peso: 23, idade: 8},
    { nome:'Dumbledore', especie: 'papagaio', sexo: 'M', peso: 1.5, idade: 53},
    { nome:'Belatriz', especie: 'gato', sexo: 'F', peso: 3.5, idade: 4}
]

let numeros = [2,0,-7,22,5,3, 13,]


//find() -> busca valores de acordo com um criterio
//caso não encontre, retorna undefined
console.log(pets.find(elemento => elemento.nome === 'Harry'))
console.log(pets.find(elemento => elemento.especie === 'gato' && elemento.sexo ==='M'))
console.log(pets.find( elemento => elemento.idade >= 4))

//some() -> verifica se ha há ALGUM elemento que coincide com o critério
//Retorna true caso exista ou false se não existir
console.log(pets.some(x => x.name === 'Mingal'))
console.log(pets.some(x => x.idade > 5))

//every() -> verifica se TODOS os elementos passam no critério
console.log(pets.every(x => x.peso >= 1))
console.log(pets.every(x = x.especie === 'cão'))
console.log('---------------------------------------------------------')

//filter() -> cria um novo vetor apenas com os elementos que passarem no critério
//Retorna um valor vazio caso não haja nenhum elemento que coincida com o critério estabelecido
console.log(pets.filter(x => x.especie === 'gato'))
console.log(pets.filter(x => x.idade >= 50))
console.log(pets.filter(x => x.especie === "gato" && x.sexo ==="M"))

// map() -> cria um NOVO vetor, do mesmo tamanho do original, contendo alguma
//transformação dos elementos deste ultimo. Não modifica o original
//Separar apenas o nome dos pets
console.log(pets.map(x => x.nome))

//novo vetor contendo os numeros do vetor original elevados ao quadrado
console.log(numeros.map(x => x** 2))

console.log('--------------------------------------------------------')

//reduce() -> reduz o valor a apenas um valor, de acordo com a função passada
//somando os numeros
//primeiro parametro é o responsável por manter o resultado ate o momento
//o segundo parametro é o valor atual, que devera ser adicionado ao acumulador de alguma forma
// faz a soma, multiplicação,, concatenação, media
//reduce não recebe os parametro inteiros
console.log(numeros.reduce((acum, valor) => acum + valor))
console.log([2,5,4,7].reduce((acum, valor) => acum * valor))
console.log(['Bom', 'dia,', 'galera!'].reduce((acum, valor) => acum + valor))
console.log('-------')

//cria um novo vetor com map( para extrair o valor dos pesos
let pesos = pets.map(x => x.peso) //Criando um vetor apenas com os pesos dos pets
console.log(pesos)
console.log(pesos.reduce((acum, val) => + val))
//calculando o peso medio (da pra fazer em uma linha só)
console.log(pets.map(x => x.pesos).reduce((acum, val) => acum + val) / pets.length)

//includes() -> retorna true caso exista um elemento no vetor igual ao parametro passado
//Diferença entre includes() e some():
//includes() -> procura um valor dentro de um vetor de valores simples
//some() -> procura por um criterio, passado via arrow function, em um vetor de objeto
console.log(numeros.includes(4))  //true
console.log(numeros.includes(10)) //false