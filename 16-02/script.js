/*1) Составьте программу, которая принимает с клавиатуры два целых числа,
   первое из которых - год рождения ученика, а второе – нынешний (текущий) год.
   Программа должна вывести на экран возраст ученика (в целых годах).
   ввод: 2006, 2018 ⇒ вывод: вам 12 лет)*/

let year_born = prompt("Ваш год рождения:");
let year_world = prompt("Нынешний год:");
let result = 0;
if(year_born < year_world){
    result = year_world - year_born;
}
alert(`вам ${result} лет`);


/*2) Напишите функцию, которая возвращает объект,
   составленный из значений вложенных массивов.
   Первое значение - ключ, второе - значение.
   Ожидаемый результат: [['a', 1], ['b', 2]] ===> { a: 1, b: 2 }

   const data = [['a', 1], ['b', 2]];
   console.log(fromPairs(data))  // { 'a': 1, 'b': 2 }*/

function year() {
   if(a < b){
       alert(`your ${result} year`);
   }else if (a > b){
       alert('ERROR') ;
   }else {
       alert('PLS TYPE CORRECT');
   }
}function arrayToObject(arr) {
    return arr.reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});
}
const arr = [['a', 1], ['b', 2]];
const obj = arrayToObject(arr);
console.log(obj); // {a: 1, b: 2}*/