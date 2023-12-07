//переменные 
// var y=0; //1 метод устаревший тип используют 2 и 3 методы
 let str = "123" //2 метод
 let bool = true //3 метод

// простые типы 
let num = 123456;
let string_my  = "Это я ";
console.log('num', typeof(num)); // отладочный вывод 
console.log('string_my', typeof(string_my));
console.log('bool', typeof(bool));
let nath = null; // специальное значение пустая переменная
console.log('nath', typeof(nath));
let und = undefined;
console.log('und', typeof(und));
// BigInt большие целые
// Symbol символьные данные

// Сложные типы данных
const obj1 = {
    val:23,
    num: "234",
    arr:[1,43,56],
    name:{
        lastname: "Schyokin",
        firstname: "Mikhail",
        age: 55
    }
};
console.log('obj', typeof(obj));
const Arr = [1,2,"uin",true]; // массивы
console.log('bool', typeof(bool));
// function yt()[]; функции
// Date Даты
//RegExp  регулярные выражения
console.log('Arr', typeof(Arr));
console.log('obj1', obj1);

console.log(num == string_my); // нестрогое равенство
console.log(num === string_my); // строгое равенство
let perv = num == string_my; // perv  получит результат num == string_my 
let numNew = Number(str);
console.log('numNew', numNew);
console.log('numNew', String(numNew));

//  Логические операторы

//   || оператор ИЛИ
//   && оператор И
//   ! инверсия
// 

// Математические операции
  let a = 5;
  let b = 3;
  let sum = a+b;
  let y = a % b; // остаток от деления
  // другие стандартные мат. операции
  console.log('sum', sum);
  // a=a+i --> a+=i

  // операторы сравнения
  // <, >, !=, ==,

  // Числовые операторы

  // целое число 67
  // дробное число 56.6
  // экспоненциальное 5Е+10
  // двоичные (бинарные) 0011
  // восьмеричные 0b111
  // HEX
  // NAN значение не является числом

  // Операторы сравнения

  // if(a>b){
  // "certificat"
  //}

//   if(a<b) {
//     "no certificat" 
//    }
//     else if(c<b){

//     }
//     else {
//     }

// циклы 
for(let i =0; i<=5; i++){
    console.log(i);
}
// Метод Math.
// Ceil // округляет до большего 
//Floor // округляет к меньшему
//Round // до ближайшего целого
// random // случайное число 0-1
// sign //знак
//trunk // усечение

// Функции 
// декларируемые
function hello(){
    console.log(a);
}
// функции - значения
let foo = function(a)// можно передать параметры//
 {
    return a; // получить значение из функции
}










