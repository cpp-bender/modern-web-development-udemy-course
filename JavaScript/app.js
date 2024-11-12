function makeNum(num = 49) {
  return Math.ceil(Math.random() * num);
}

for (let j = 0; j < 8; j++) {
  let res = 'Kolon ' + (j + 1) + ': ';
  for (let i = 0; i < 6; i++) {
    res += makeNum() + " ";
  }
  console.log(res);
}

