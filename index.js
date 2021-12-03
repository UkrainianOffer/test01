// let total = 0;
// let num;

// do {
//   num = prompt('Введите цифры')

//   if (!isNaN(num)) {
//     total +- Number(num);
//   }
//   console.log(num)

// } while (num !== null)

// console.log(total)

// ****************************************
// const inputOdd = prompt(
//   'Введите, пожалуйста, слово с нечетным количеством букв'
// );
// const message2 = inputOdd.slice(
//   (inputOdd.length - 1) / 2,
//   (inputOdd.length - 1) / 2 + 1
// );
// console.log(inputOdd);
// console.log(message2);
// alert(`Средняя буква в Вашем слове: ${message2}`);

// ************************************
// const a = '1234567';
// const b = a.slice((a.length - 1) / 2 - 1, (a.length - 1) / 2 + 2);
// console.log(b);

// **************************************
// const inputOdd = prompt('Введите, пожалуйста, слово');
// let message;
// if (inputOdd === null || inputOdd.trim() === '') {
//   alert('Invalid value');
// } else {
//   if (inputOdd.length % 2 === 0) {
//     message = inputOdd.slice(inputOdd.length / 2 - 1, inputOdd.length / 2 + 1);
//     alert(message);
//   } else {
//     message = inputOdd.slice(
//       (inputOdd.length - 1) / 2,
//       (inputOdd.length - 1) / 2 + 1,
//     );
//     alert(message);
//   }
// }
// ****************************999999999999999
// const age = 14;
​
// if (age >= 18) {
//     console.log('OK');
// } else if (age >= 16) {
​
// } else if (age >= 14) {
​
// } else if (age >= 10) {
​
// } else if (age >= 8) {
//     console.log('NOT OK');
// } else {
//     console.log('NOOOOT OK');
// }
​
​
// let type;
// const age = 20;
​
// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }
​
// console.log(type);
​
/*-------------*/
​
​
// const age = 12;
// let type = age >= 18 ? "adult" : "child";
​
// console.log(type);
​
​
/*--------------*/
​
// const type = "1";
// let code;
​
// switch(type) {
//     case "phone": 
//     case "1":
//     case "address": code = "fvdfv875"; break;
​
//     default: code = "00000";
// }
​
// if (type === 'phone') {
//     code = "gf7d845";
// } else if (type === '1') {
//     code = "vsdfvf45";
// } else if (type === 'address') {
//     code = "fvdfv875";
// } else {
//     code = "00000";
// }
​
// console.log(code);
​
/*----------------------*/
​
// const test = 15;
​
// if (true) {
//    // const test = 20;
​
//     const test1 = 5;
//     //if(true) {
//         const test2 = test + test1;
//     //}
​
//     // console.log(test2);
//     // console.log(test1);
//     console.log(test);
// }
​
// console.log(test);
​
/*-------------------*/
​
// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i += 1;
// }
​
// let i = 0;
// do {
//     console.log(i);
//     i += 1;
// } while (i < 10);
​
// let password = "";
​
// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
​
// console.log("Ввели пароль: ", password);
​
// for (let i = 0; i <= 10; i+=1) {
//     console.log(i);
// }
​
/*------------*/
​
// let i = 0;
​
// console.log(i--); // 0
// console.log(--i); // 2
// console.log(i--); // 2
// console.log(i);   // 3
​
/*-----------*/
​
// const str = "подотряд класса пресмыкающихся отряда чешуйчатые1";
// let res = "";
// for (let i = 0; i < str.length; i++) {
//     //console.log(res, i % 2);
//     if (i % 2) {
//         res += "*";
//     } else {
//         res += str[i];
//     }
// }
// ​
// console.log(res);
// res = '';
// ​
// for (let i = 0; i < str.length; i += 2) {
//     res += str[i];
//     if (i < str.length - 1)
//         res += '*';
// }
// ​
// console.log(res);
// *********************************************


// console.log(arrName[0]); // bill
// console.log(arrName[1]); // jhony 
// console.log(arrName[2]); // ivan
// console.log(arrName[3]); // 6
// console.log(arrName.length); // 4
// console.log(arrName.length-1); // 3 index
// console.log(arrName[arrName.length-1]); // 6 item
​
/*-------------------------*/
​
// for (let i = 0; i < arrName.length; i++) {
//     console.log(arrName[i]);
// }
​
// const arrNum = [1,2,3,4,5];
// let total = 0;
​
// for (const item of arrNum) {
//     total += item;
// }
​
// console.log(total);
​
/*-------------------*/
​
// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;
​
//for (let i = 0; i < numbers.length; i += 1) {
​
// let result;
// for (const item of numbers) {
//   if (item >= threshold) 
//     console.log(`Число больше чем ${threshold}: ${item}`); 
// }
​
​
/*-------------------*/
​
// const arr = ['test', 'test1'];
// const arr1 = arr;
​
// console.log(arr); // ['test', 'test1']
​
// arr[0] = 1; // изменение оригинала
// arr1[1] = 10; // изменение оригинала по копии ссылки
​
// console.log(arr1); // вывод по скопированеной ссылки
​
// arr[0] = 20; // изменение оригинала
// const arr2 = []; // создание нового массива
// for(const item of arr) { // перебор оригинального массива
//     arr2.push(item); // добавляем в конец новые элементы массива
// }
// arr[1] = 'test'; // изменение оригинала
// console.log(arr2); // вывод скопированного массива
​
​
/*------------------*/
​
// const arr = [1, 2, 3, 4, 5, 'test', 6, 7, 8, 9, '11', [0,1,]];
// const str = "Если индекс отрицательный, begin указывает смещение от конца последовательности. Вызов slice(-2) извлечёт два последних элемента последовательности.";
​
// const arr1 = arr.slice(0, -1);
​
// console.log(arr1);
​
// console.log(arr.join(" | "));
// const arrStr = str.split(" ");
​
// arrStr.push('1111');
// console.log(arrStr);
​
// const a = [1,2,3];
// const b = [1,2,3];
​
// if (`${a}` === `${b}`) {
//     console.log('OK');
// }
​
// console.log(arr.indexOf('test'));
// console.log(arr.includes(11));
​
// console.log(arr);
​
// for (let i = 0; i < 5; i++) {
//     arr.push(`TEST_${i}`);
// }
​
// console.log(arr.pop());
​
// arr.splice(arr.indexOf(5), 0, 'test15', 'test17', 'test16');
​
// console.log(arr);
​
​
// const arr1 = ['Bill', 'Mango', 1];
// const arr2 = ['Ivan', 'Anton'];
// const arr3 = arr1.concat(arr, [0, 0, 0], arr2);
​
// console.log(arr3);
​
/*---------------------*/
​
// const arr = [
//     [1, 2, 3, 4],
//     [2, 5, 4, 6],
//     [1, 5, 2, 4],
//     [1, 9, 8, 4],
//     'test'
// ];
// ​
// //console.log(arr[1][2][0]);
// ​
// for (const item of arr) {
//     if (typeof item === 'object') {
//    // if (Array.isArray(item)) {
//         for (const item1 of item) {
//             console.log(item1);
//         }
//     } else {
//         console.log(item);
//     }
// }
// ​
// console.log(arr);