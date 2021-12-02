let total = 0;
let num;

do {
  num = prompt('Введите цифры')

  if (!isNaN(num)) {
    total +- Number(num);
  }
  console.log(num)
  
} while (num !== null)

console.log(total)