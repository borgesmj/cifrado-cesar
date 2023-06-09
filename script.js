const input = document.querySelector('#input');
const output = document.querySelector('#output')
const btn_copiar = document.querySelector("#botonCopiar")
input.addEventListener('input', function(e) {
      let jump = 13;
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let solution = ""
      //el regEx que evaluará si hay o no caracteres especiales o números
      let regEx = /[A-Z]/;
      let str = input.value
      let newStr = str.toUpperCase()
  for (let i = 0; i < str.length; i++) {
    if (regEx.test(newStr[i])) {
      let p = letters.indexOf(newStr[i]);
      p = (p + jump) % letters.length;
      solution += letters[p];
    } else {
      solution += str[i];
    }
  }
  output.value=solution;
});
