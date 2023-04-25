let x = -5;
if (x < 0) x = -x;
console.log("|x| = " + x);

let y = 5;
if (y < 0) y = -y;
console.log("|y| = " + x);

// Cравнение чисел, возврат булевого значения
console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

let resulst = 7 > 5;
console.log(resulst); // true

// Сравнение строк. "алфавитный" и "лексиграфический". т.е тупо по символам
console.log("Я" > "А"); // true
console.log("Кот" > "Код"); // true
console.log("Сонный" > "Сон"); // true

console.log("2" > 1); // true  тут строки сразу в числа пребразуются
console.log("01" == 1); // true

console.log(true == 1); // true
console.log(false == 0); // true
console.log(null == undefined); // true
console.log(null >= undefined); // false тут null == 0 а underfined не число
console.log(null <= undefined); // false тут null == 0 а underfined не число

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

// Строгое сравнение  ===  (по типу данных)
console.log(true === 1); //false  . true это булевое, они уже не равны
console.log(true === 0); //false  . true это булевое, они уже не равны

console.log("5" === 5); //false
console.log("7" === 7); //false
console.log(null === undefined); //false

console.log("5" !== 5); //true
console.log(null !== undefined); //true
