let x = 4,
  y = true,
  z = false;
if (!0) console.log("0 дает false"); // true / тут по принципу прадва или ложь. 4 Это не ноль, что правда
if ("0") console.log("строка дает true"); // true
if (!"") console.log("пустая строка дает false"); //true
if (y) console.log("y = true дает true"); //true
if (!z) console.log("z = false дает false"); // true

// По приоритетам ! первое место, затем && и только птом ||

// SWITCH  перещелкивать
let item = 3;
switch (item) {
  case 1:
    console.log("Item = 1");
    break; // после кейса стоят константы, в данном случае числа
  case 2:
    console.log("Item = 2");
    break;
  case 3:
    console.log("Item = 3");
    break; // отсюда начнет работать оператор , НО начнут работать и те, что после него/ ННООО если поставить брейк, то после работать уже не будет ничего
  case 4:
    console.log("Item = 4");
    break;
  default: // default не обязателен, в зависимости от задачи
    console.log("Item другое значение");
}

// !! Если нужно проеврить равенство на МНОЖЕСТВО значений, лучше SWITCH, в остальных случаях IF
