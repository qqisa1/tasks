/*1) На старте вы получаете массив. Необходимо написать функцию, которая будет
   возвращать массив удвоенных значений исходного массива.
   Пример кода:
   example([1, 2, 3]) => [2, 4, 6]
   example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
   example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

/*function DoubleValue() {
  let numbers = [1, 2, 3, 4, 5];
  return console.log(numbers.map(numbers => numbers * 2));
 }
 let result = DoubleValue();
 console.log(result);*/

/*2) Напишите функцию, которая заполняет новый массив предоставленным значением
   и затем ее возвращает. Функция должна первым параметром принимать
   элемент (значение для массива), вторым параметром размер массива.
   Например: myFunc('a', 3)   // ['a', 'a', 'a']*/

/* function fillArray(element, size) {
   let newArray = [];
   for (let i = 0; i < size; i++) {
     newArray.push(element);
   }
   return newArray;
 }

 console.log(fillArray('a', 3));*/


 /*3) Напишите функцию, которая разворачивает массив в обратном порядке
   и затем ее возвращает.  Функция наша  принимает массив любых элементов.
   Например:
   const data = [1, 2, 3];
   myFunc(data);  // [3, 2, 1];*/




let arr = [ 1, 2, 3,];
function reverse() {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

reverse();


