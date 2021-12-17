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

// if (age >= 18) {
//     console.log('OK');
// } else if (age >= 16) {

// } else if (age >= 14) {

// } else if (age >= 10) {

// } else if (age >= 8) {
//     console.log('NOT OK');
// } else {
//     console.log('NOOOOT OK');
// }


// let type;
// const age = 20;

// if (age >= 18) {
//   type = "adult";
// } else {
//   type = "child";
// }

// console.log(type);

/*-------------*/


// const age = 12;
// let type = age >= 18 ? "adult" : "child";

// console.log(type);


/*--------------*/

// const type = "1";
// let code;

// switch(type) {
//     case "phone":
//     case "1":
//     case "address": code = "fvdfv875"; break;

//     default: code = "00000";
// }

// if (type === 'phone') {
//     code = "gf7d845";
// } else if (type === '1') {
//     code = "vsdfvf45";
// } else if (type === 'address') {
//     code = "fvdfv875";
// } else {
//     code = "00000";
// }

// console.log(code);

/*----------------------*/

// const test = 15;

// if (true) {
//    // const test = 20;

//     const test1 = 5;
//     //if(true) {
//         const test2 = test + test1;
//     //}

//     // console.log(test2);
//     // console.log(test1);
//     console.log(test);
// }

// console.log(test);

/*-------------------*/

// let i = 0;
// while (i < 10) {
//     console.log(i);
//     i += 1;
// }
//
// let i = 0;
// do {
//     console.log(i);
//     i += 1;
// } while (i < 10);
//
// let password = "";
//
// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);
//
// console.log("Ввели пароль: ", password);
//
// for (let i = 0; i <= 10; i+=1) {
//     console.log(i);
// }

/*------------*/

// let i = 0;

// console.log(i--); // 0
// console.log(--i); // 2
// console.log(i--); // 2
// console.log(i);   // 3

/*-----------*/

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
//
// console.log(res);
// res = '';
//
// for (let i = 0; i < str.length; i += 2) {
//     res += str[i];
//     if (i < str.length - 1)
//         res += '*';
// }
//
// console.log(res);
// *********************************************


// console.log(arrName[0]); // bill
// console.log(arrName[1]); // jhony
// console.log(arrName[2]); // ivan
// console.log(arrName[3]); // 6
// console.log(arrName.length); // 4
// console.log(arrName.length-1); // 3 index
// console.log(arrName[arrName.length-1]); // 6 item

/*-------------------------*/

// for (let i = 0; i < arrName.length; i++) {
//     console.log(arrName[i]);
// }

// const arrNum = [1,2,3,4,5];
// let total = 0;

// for (const item of arrNum) {
//     total += item;
// }

// console.log(total);

/*-------------------*/

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

//for (let i = 0; i < numbers.length; i += 1) {

// let result;
// for (const item of numbers) {
//   if (item >= threshold)
//     console.log(`Число больше чем ${threshold}: ${item}`);
// }


/*-------------------*/

// const arr = ['test', 'test1'];
// const arr1 = arr;

// console.log(arr); // ['test', 'test1']

// arr[0] = 1; // изменение оригинала
// arr1[1] = 10; // изменение оригинала по копии ссылки

// console.log(arr1); // вывод по скопированеной ссылки

// arr[0] = 20; // изменение оригинала
// const arr2 = []; // создание нового массива
// for(const item of arr) { // перебор оригинального массива
//     arr2.push(item); // добавляем в конец новые элементы массива
// }
// arr[1] = 'test'; // изменение оригинала
// console.log(arr2); // вывод скопированного массива


/*------------------*/

// const arr = [1, 2, 3, 4, 5, 'test', 6, 7, 8, 9, '11', [0,1,]];
// const str = "Если индекс отрицательный, begin указывает смещение от конца последовательности. Вызов slice(-2) извлечёт два последних элемента последовательности.";

// const arr1 = arr.slice(0, -1);

// console.log(arr1);

// console.log(arr.join(" | "));
// const arrStr = str.split(" ");

// arrStr.push('1111');
// console.log(arrStr);

// const a = [1,2,3];
// const b = [1,2,3];

// if (`${a}` === `${b}`) {
//     console.log('OK');
// }

// console.log(arr.indexOf('test'));
// console.log(arr.includes(11));

// console.log(arr);

// for (let i = 0; i < 5; i++) {
//     arr.push(`TEST_${i}`);
// }

// console.log(arr.pop());

// arr.splice(arr.indexOf(5), 0, 'test15', 'test17', 'test16');

// console.log(arr);


// const arr1 = ['Bill', 'Mango', 1];
// const arr2 = ['Ivan', 'Anton'];
// const arr3 = arr1.concat(arr, [0, 0, 0], arr2);

// console.log(arr3);

/*---------------------*/

// const arr = [
//     [1, 2, 3, 4],
//     [2, 5, 4, 6],
//     [1, 5, 2, 4],
//     [1, 9, 8, 4],
//     'test'
// ];

//console.log(arr[1][2][0]);
//
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
//
// console.log(arr);
// ******PEBEPC*****
// Write a function that reverse an integer number. You can't use any array methods, besides push.
// reverseNumber() returns 54321
// function reverseNumber(number) {
//   let revStr = '';

//   const newString = String(number);
//   if (number > 0) {
//     for (let i = newString.length - 1; i >= 0; i -= 1) {
//       revStr += newString[i];
//       console.log(revStr);
//     }
//     return Number(revStr);
//   } else {
//     for (let i = newString.length - 1; i >= 1; i -= 1) {
//       revStr += newString[i];
//       console.log(revStr);
//     }
//     return Number(revStr) * -1;
//   }
// }

// console.log(reverseNumber(-12345));
// ****************************************
// function makeListFromRange(array) {
//   let newArr = [];
//   let secondArr = [];
//   if (array[0] > array[1]) {
//     newArr = [array[1], array[0]];
//   } else {
//     newArr = array;
//   }
//   for (let i = newArr[0]; i <= newArr[1]; i++) {
//     secondArr.push(i);
//     // console.log(newArr);
//   }
//   return secondArr;
// }
// console.log(makeListFromRange([2, 7]));
// console.log(makeListFromRange([8, 5]));



// [emailInputName] , [passwordInputName]

// ******************** ОБЬЕКТЫЫЫЫЫЫЫ********************************


// const human = {
//     name: "Bill",
//     age: 25,
//     phone: ['+380504457896', '+380734578963'],
//     getCity: function () {
//         return human.location.city;
//     },
//     getFirstPhone: function() {
//         return human.phone[0];
//     },
//     location: {
//         country: "Jamaica",
//         city: "Ocho Rios",
//     }
// };

// console.log(human.getCity());
// console.log(human.getFirstPhone());
// console.log(human.location.country);
// console.log(human.phone[1]);

// let key = "age";

// console.log(human.name);
// console.log(human[key]);

/*---------------*/


// const name = "Bill";
// const age = 25;
// const key = "test";

// const user = { name, age };
// const user1 = { name, age };
// const user2 = {
//     name, age,
//     [key]: age
// }
// console.log(user);
// console.log(user1);
// console.log(user1 === user);
// console.log(user2);


/*------------*/

// const bookShelf = {
//     books: ["The Last Kingdom"],
//     getBooks() {
//         return this.books;
//     },
//     addBook(bookName) {
//         this.books.push(bookName);
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//     },
// };

// const obj = {
//     name: "devOPS",
//     description: "dfjhvbdlfvdf kidlfvds blkff",
//  };

// bookShelf.magazine = obj;

// console.log(bookShelf);

// console.log(bookShelf.getBooks());
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks());
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());


/*---------------*/

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };

// for(const key in book) {
//     console.log(book[key]);
// }

// console.log("---------------");
// const arr = ["Bill", "Jhony", "Tom"];

// for (const item of arr) {
//     console.log(item);
// }

/*------------*/

// const animal = {
//     legs: 4
// };
//
// const dog = Object.create(animal);
//
// dog.name = 'Fox';
//
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("legs"));

// console.log(dog);
// console.log(dog.legs);
// console.log(dog.name);

// const book = {
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//     title: "The Last Kingdom",
// };

// for (const key in book) {
//     if (book.hasOwnProperty(key))
//         console.log(book[key]);
// }

// for (const key of Object.keys(book)) {
//     console.log(key);
// }

// console.log('-----------');

// for (const value of Object.values(book)) {
//     console.log(value);
// }

// console.log('------------');

// for (const entri of Object.entries(book)) {
//     console.log(entri[0], '=' , entri[1]);
// }

/*--------------*/

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//         name:"ttt"
//     },
//     {
//         title: "На берегу спокойных вод",
//         author: "Роберт Шекли",
//         rating: 8.51,
//     },
//     {
//         title: "Сон смешного человека",
//         author: "Федор Достоевский",
//         rating: 7.75,
//     },
// ];
//
// delete books[0].name;

// for (const item of books) {
//     if (item.hasOwnProperty("title"))
//         console.log(`Книга ${item.title} по авторству ${item.author}`);
// }

// console.log('---------------');
// for (const item of books) {
//     if (item.rating >= 8)
//         console.log(`Книга ${item.title} по авторству ${item.author}`);
// }

// const addBook = function (title, author, rating) {
//     books.push({ title, author, rating });
// }

// const removeBook = function (title) {
//     for (let book of books) {
//         if (book.title === title) {
//             books.splice(books.indexOf(book), 1);
//             break;
//         }
//     }
// }

// addBook("Война и мир", "Лев Толстой", 7.5);

// console.log(books);

// removeBook("На берегу спокойных вод");


// **************************************************************************************
// const test = [1, 2, 3, 4, 5, 6];

// const test1 = [
//     { test: 1 },
//     { test: 2 },
//     { test: 3 },
//     { test: 4 }
// ]

// console.log(...test1);
// console.log(test1[0], test1[1], test1[2], test1[3]);


// console.log(Math.max(...test));
// console.log(Math.min(...test));

/*---------------*/


// const test = [1, 2, 3, 4, 5];
// const test1 = [6, 7, 8, 9, 10];

// const testCopy = [-8, ...test, 88, ...test1, 12, ...[77, 88, 99]];

// //testCopy[0] = 5;

// console.log(testCopy === test);
// console.log(test);
// console.log(testCopy);


/*----------------*/

// const user = {
//     name: "Bill",
//     age: 30
// };

// const user1 = {
//     age: 25
// }

// const userCopy = {
//     ...user,
//     age: 78,
//     ...user1,
//     name: "Tom",
//     phone: "+380xxxxxxx"
// };

// const userTest = {
//     name: user.name,
//     age: user.age,
//     age: user1.age
// }


// const obj = {};

// console.log(userTest);
// console.log(userCopy);

// const user = {
//     name: "Bill",
//     age: 25
// };

// const user1 = {...user};

// console.log(user === user1);
// console.log(user, user1);

/*---------------------------*/

// const sum = function (firstParam, secondParams, ...params) {
//     let total = 0;
//     console.log('f ->', firstParam);
//     console.log('s ->', secondParams);
//     console.log('p ->', params);
//     for (const item of params) {
//         total += item;
//     }
//     return total;
// }
// const arr = [1, 2, 3, 4];

// console.log(sum(1, 2, 3, 4));

/*--------------------*/

// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };

// const {
//     age: old = 99,
//     name,
//     phone,
//     address = "TEST TEST"
// } = user;

// phone[0] = "test";

// console.log(user);
// console.log(old, name, phone, address);

/*-----------------*/

// const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const {
//     name,
//     tag,
//     stats: {
//         followers,
//         views: userViews,
//         likes: userLikes = 0
//     },
// } = user;

// console.log(name);
// console.log(tag);
// console.log(followers);
// console.log(userViews);
// console.log(userLikes);

/*------------------------*/

// const rgba = [155, 44, 78, 0.3];

// const [,, blue, alfa = 0.3] = rgba;
// const [red, green, blue, alfa = 0.3] = rgba;
// const [red, green, ...colors] = rgba;
// console.log(red, green, colors);
// console.log(`R:${red},G:${green},B:${blue},A:${alfa}`);

// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };

// for (const item of Object.entries(user)) {
//     console.log(item[0], item[1]);
// }

// for (const [key, value] of Object.entries(user)) {
//     console.log(key, value);
// }

/*-----------------------*/

// const user = {
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// };


// // const showUser1 = function ({...params}) {
// //     console.log(params);
// // }
// const showUser = function ({ phone: [,secondPhone], ...params }) {
//     console.log(secondPhone);
//     console.log(params);
// }

// // showUser1(user);
// showUser({
//     name: "Bill",
//     age: 25,
//     phone: ["+380504455896", "+380504488523"],
//     address: "Ломоносова 5"
// });
// ************************ FUNCTION



// const showStr = function(str, cb) {
//     cb(str);
// }
​
// const logger = function(str1) {
//     console.log(`log -> ${str1}`);
// }
​
// showStr("hello wolrd", logger);
​
// showStr("Hello BC13", function(str) {
//     console.log(`GOIT -> ${str}`);
// })
​
​
/*------------------*/
​
// const user = {
//     name: "Bill",
//     age: 25
// };
​
// const isAdult = function (user, success, error) {
//     if (user.age >= 18) {
//         success(user.name);
//     } else {
//         error(user.name);
//     }
// }
​
// // const success = function(name) {
// //     console.log(`${name} -> OK`);
// // }
​
// // const error = function(name) {
// //     console.log(`${name} -> NOT OK`);
// // }
​
​
// isAdult(user, success, error);
​
/*-----------------*/
​
// function printValue(value) {
//     console.log(value);
// }
​
// function prettyPrint(value) {
//     console.log("Logging value: ", value);
// }
​
// function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }
​
// console.log(printValue);
​
// repeat(3, printValue);
​
​
// repeat(3, prettyPrint);
​
​
/*----------------*/
​
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
​
// const callback = function (item, index, array) {
//     console.log(`${index} -> ${item}`, array);
// }
​
// const forEach = function (arr, cb) {
//     for (const item of arr) {
//         cb(item, arr.indexOf(item), arr);
//     }
// }
​
// arr.forEach(callback);
​
// console.log('----------------------');
​
// forEach(arr, callback)
​
/*---------------*/
​
// const user = {
//     name: "Bill",
//     age: 30,
//     phone: ["+38050xxxxxxx", '+38050xx44xxxxx']
// }
​
// Object.entries(user).forEach(function ([key, value], index, arr) {
//     console.log(arr);
//     console.log(`${key} -> ${value}`, index);
// })
​
/*----------------*/
​
// const fn = function (x, y) {
//     return x + y;
// }
​
// const fn1 = (x, y) => {
//     return x + y;
// }
​
// const fn2 = x => 2 ** x;
​
//console.log(fn2(10));
​
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
​
// arr.forEach(item => console.log(2 ** item));
// arr.forEach((item, index) => console.log(`element: ${item} | index: ${index}`));
​
// const fn3 = () => "TEST";
​
// arr.forEach(function (item) {
//     console.log(2 ** item);
// })
​
/*-----------------------------*/
​
// const getRandomNum = function (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }
​
// const getRandomNumArrow = (min, max) => Math.floor(Math.random() * (max - min) + min);
​
​
// console.log(getRandomNumArrow(5,10));
​
// const user = {
//     name: "Bill",
//     age: 30,
//     phone: ["+38050xxxxxxx", '+38050xx44xxxxx']
// }
​
// Object.entries(user).forEach(([key, value]) => {
//     if (key !== 'phone') 
//         return console.log(`${key} -> ${value}`);
// });
​
// const fn = (name, age) => {
​
//     return { name, age }
// };
​
// console.log(fn('Bill', { t1: '1', t2:'2', t3: '3' }));
​
// Object.entries(user).forEach(function ([key, value]) {
//     console.log(`${key} -> ${value}`);
// })
​
/*---------------*/
​
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
​
// for (let i = 0; i < arr.length; i++) {
//     console.log(i);
// }
​
// arr.forEach(item => console.log(item));
​
/*--------------*/
​
​
// const test = cb => cb();
​
// const fn = () => {
//     console.log(5);
//     return 'ok';
// }
​
// console.log(test(fn));
​
/*--------------*/