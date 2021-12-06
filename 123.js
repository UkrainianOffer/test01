const str = 'подотряд класса пресмыкающихся отряда чешуйчатые1';
let res = '';
for (let i = 0; i < str.length; i++) {
  //console.log(res, i % 2);
  if (i % 2) {
    res += '*';
  } else {
    res += str[i];
  }
}
