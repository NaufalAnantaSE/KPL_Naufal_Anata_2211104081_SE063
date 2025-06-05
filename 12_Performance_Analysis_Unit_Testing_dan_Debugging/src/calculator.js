/**
 * Kelas Calculator untuk operasi matematika dasar
 */
class Calculator {
  // Menjumlahkan dua angka
  add(a, b) {
    return a + b;
  }

  // Mengurangkan angka kedua dari angka pertama
  subtract(a, b) {
    return a - b;
  }

  // Mengalikan dua angka
  multiply(a, b) {
    return a * b;
  }

  // Membagi angka pertama dengan angka kedua
  // Melempar error jika pembagi adalah nol
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
}

module.exports = Calculator;