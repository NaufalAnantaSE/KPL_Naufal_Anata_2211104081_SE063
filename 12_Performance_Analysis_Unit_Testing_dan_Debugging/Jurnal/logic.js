function CariNilaiPangkat(a, b) {
  if (b === 0) {
    return 1;
  }
  if (b < 0) {
    return -1;
  }
  if (b > 10 || a > 100) {
    return -2;
  }

  let hasil = 1;
  for (let i = 0; i < b; i++) {
    hasil *= a;

    if (hasil > 2147483647) {
      return -3;
    }
  }

  return hasil;
}

function hitungPangkat() {
  const a = parseInt(document.getElementById("base").value);
  const b = parseInt(document.getElementById("exponent").value);
  const output = document.getElementById("output");

  if (isNaN(a) || isNaN(b)) {
    output.innerText = "Input tidak valid.";
    return;
  }

  const result = CariNilaiPangkat(a, b);
  output.innerText = `Hasil: ${result}`;
}
