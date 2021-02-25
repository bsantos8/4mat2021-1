let numeros = [10, 20, 30] //vetor

//objeto
let carro = {
    marca: "Volkswagen",
    modelo: 'Fusca',
    ano: 1969,
    cor:'preto'
}

//desestruturação de vetor - joga os valores do vetor em 3 resultados diferentes
let [x,y,z] = numeros
console.log(x)
console.log(y)
console.log(z)

//Desestruturação parcial de vetor
//pegar apenas o 2 valor
let [,c, ,] = numeros
console.log(c)

//pegando apenas os 2 primeiros valores
let [a,b] = numeros
console.log(a)
console.log(b)

//desestruração de objeto: o nome das variaveis tem q ser iguais ao nome das propriedades do obj
//A ordem das variaveis não importa
//comentar para fazer a proxima etapa:*let {ano, modelo, marca, cor} = carro
console.log(ano)
console.log(modelo)
console.log(marca)
console.log(cor)

//desestruturação parcial; basta passar apenas o nome das propriedades desejadas
let {marca,ano} = carro
console.log(marca)
console.log(ano)
//renomear variaveis ao desestruturar um obj
let {marca: brand, ano:year} = carro
console.log(brand)
console.log(year)