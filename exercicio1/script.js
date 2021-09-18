// 1)  Criar 3 variáveis com tipos Objeto Number para guardar os valores:
// a)  300, 999 e 21.
// b)  Exibir no console os valores das variáveis.

const number1 = new Number(300);
const number2 = new Number(999);
const number3 = new Number(21);

console.log(number1);
console.log(number2);
console.log(number3);

//2) Exibir no console os valores de 4 propriedades do tipo objeto Number.


console.log(Number.EPSILON);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);

//3)  Criar 1 variável para receber o valor 150, em seguida faça:
// a)  Exibir no console o valor da variável.
// b)  Converter para string o valor.
// c)  Exibir no console, o valor convertido.

let num = new Number(150);
console.log(num);

let newNum = num.toString();
console.log(newNum);