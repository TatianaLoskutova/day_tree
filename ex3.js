let x = -10,
  sgn = 0;
if (x < 0) {
  sgn = -1;
  console.log("x отрицательное число", sgn);
} else if (x > 0) {
  sgn = 1;
  console.log("x положительное число", sgn);
} else console.log("x равен 0", sgn);

// тернарный оператор
let age = 20;
let accessAllowed = age > 18 ? true : false; // до вопроса это типа if в скобках, вопрос значит выполняем, если ложное условие то : переход
console.log(accessAllowed);

let age2 = 2;
let accessAllowed2 = age2 > 18; //  тут уже автоматом true или false выпадет
console.log(accessAllowed2);
