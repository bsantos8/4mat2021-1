let nota = 4.3

let situacao

/** if(nota >= 6) {
 * situacao = 'Aprovado'
 * }else {
 * situacao = 'Reprovado'
 * }
 * 
 * if(nota >=6) situacao = 'Aprovado'
 * else situacao = 'Reprovado'
 */
nota = 8.6

/** usando operador ternario
 * 1º termo: condição(que irira no if)
 * Separando o 1º termo do 2º temos ?
 * 2º termo: resultado caso a condição seja verdadeira
 * Separando o 2] termo do 3º temos:
 * 3º termo: resultado caso a condição seja falsa
 */
situacao = (nota >=6 ? 'Aprovado' : 'Reprovado')

console.log({nota,situacao})

let user = 'zemane'
let msg

msg = (user === 'root' || user === 'admin' ? 'superusuario' : 'Usuário comum')

console.log({user,msg})