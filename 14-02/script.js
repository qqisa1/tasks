/*1) Составьте программу, которая принимает с клавиатуры числа,
   пока не будет введено значение 99. Программа должна подсчитать,
   сколько чисел было введено с клавиатуры (не считая значения 99)
   и вывести эту информацию на экран.
   ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4*/

let count = 0;
while (true) {
    let num = parseInt(prompt("Введите число:"));
    if (num === 99) {
        break;
    }
    count++;
}
console.log({count});



/*2) Составьте программу, которая принимает с клавиатуры числа,
   пока не будет введено значение 999. Программа должна подсчитать,
   сколько чисел было введено с клавиатуры, чему равна сумма этих
   чисел (не считая значения 999), и вывести эту информацию на экран.
   ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290*/

let count = 0;
let sum = 0;

while (true){
    let num = parseInt(prompt("введите число"));
    if (num === 999){
        break;
    }
    count++;
    sum += num;
}

console.log({count});
console.log({sum});





